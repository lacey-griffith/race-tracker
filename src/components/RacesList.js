import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RacesList = ({ races }) => {
    // State for sorting
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

    // State for filters
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDates, setSelectedDates] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [showOnlyOpen, setShowOnlyOpen] = useState(false);

    // State for filter visibility
    const [activeFilter, setActiveFilter] = useState(null);

    // Extract unique dates, locations, and types for the dropdowns
    const uniqueDates = [...new Set(races.map(race => race.date))];
    const uniqueLocations = [...new Set(races.map(race => race.race_desc))];
    const uniqueTypes = [...new Set(races.map(race => race.type))];

    // Ref for click outside detection
    const filterContainerRef = useRef(null);
    const filtersRef = useRef({});

    useEffect(() => {
        const handleClickOutside = (event) => {
            const filterOptionsRefs = Object.values(filtersRef.current);

            // Check if the click is outside of all filter options
            if (
                filterContainerRef.current &&
                !filterContainerRef.current.contains(event.target) &&
                filterOptionsRefs.every(ref => !ref || !ref.contains(event.target))
            ) {
                setActiveFilter(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle input changes for filters
    const handleSearchChange = (e) => setSearchQuery(e.target.value.toLowerCase());

    const handleDateChange = (e) => {
        const value = e.target.value;
        setSelectedDates(prevState =>
            prevState.includes(value)
                ? prevState.filter(date => date !== value)
                : [...prevState, value]
        );
    };

    const handleLocationChange = (e) => {
        const value = e.target.value;
        setSelectedLocations(prevState =>
            prevState.includes(value)
                ? prevState.filter(location => location !== value)
                : [...prevState, value]
        );
    };

    const handleTypeChange = (e) => {
        const value = e.target.value;
        setSelectedTypes(prevState =>
            prevState.includes(value)
                ? prevState.filter(type => type !== value)
                : [...prevState, value]
        );
    };

    const handleOpenChange = (e) => setShowOnlyOpen(e.target.checked);

    const handleSortChange = (e) => {
        const value = e.target.value;
        if (value === '') {
            setSortConfig({ key: null, direction: null });
        } else {
            const [key, direction] = value.split(' ');
            setSortConfig({ key, direction });
        }
    };

    // Filter races based on search query, date, location, type, and registration status
    const filteredRaces = races.filter(race => {
        const matchesSearch = race.race_name.toLowerCase().includes(searchQuery);
        const matchesDate = selectedDates.length === 0 || selectedDates.includes(race.date);
        const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(race.race_desc);
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(race.type);
        const matchesOpen = !showOnlyOpen || race.registration_open;

        return matchesSearch && matchesDate && matchesLocation && matchesType && matchesOpen;
    });

    // Sorting function
    const sortedRaces = [...filteredRaces].sort((a, b) => {
        if (sortConfig.key === null) {
            return 0;
        }

        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue < bValue) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    return (
        <>
            <div ref={filterContainerRef}>
                <div className="filters">
                    <input
                        type="text"
                        placeholder="Search by race name..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />

                    <label className='open-registration'>
                        <input
                            type="checkbox"
                            checked={showOnlyOpen}
                            onChange={handleOpenChange}
                        />
                        Show only open registrations
                    </label>

                    <select className='sort-by-dropdown' onChange={handleSortChange} value={sortConfig.key ? `${sortConfig.key} ${sortConfig.direction}` : ''}>
                        <option value="">Sort By</option>
                        <option value="race_name asc">Race Name (A-Z)</option>
                        <option value="race_name desc">Race Name (Z-A)</option>
                        <option value="date asc">Date (Asc)</option>
                        <option value="date desc">Date (Desc)</option>
                        <option value="race_desc asc">Location (A-Z)</option>
                        <option value="race_desc desc">Location (Z-A)</option>
                    </select>

                    <button className='clear-filter-btn' onClick={() => {
                        setSearchQuery('');
                        setSelectedDates([]);
                        setSelectedLocations([]);
                        setSelectedTypes([]);
                        setShowOnlyOpen(false);
                        setSortConfig({ key: null, direction: null });
                    }}>
                        Clear Filters
                    </button>
                </div>

                <div className="filters-container">
                    <h3>Filter</h3>
                    <div className="filter-container date-filter">
                        <div className="filter-title" onClick={() => setActiveFilter(activeFilter === 'date' ? null : 'date')}>
                            Date
                        </div>
                        {activeFilter === 'date' && (
                            <div className="filter-options" ref={el => filtersRef.current['date'] = el}>
                                {uniqueDates.map(date => (
                                    <label key={date}>
                                        <input
                                            type="checkbox"
                                            name="date"
                                            value={date}
                                            checked={selectedDates.includes(date)}
                                            onChange={handleDateChange}
                                        />
                                        {date}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="filter-container location-filter">
                        <div className="filter-title" onClick={() => setActiveFilter(activeFilter === 'location' ? null : 'location')}>
                            Location
                        </div>
                        {activeFilter === 'location' && (
                            <div className="filter-options" ref={el => filtersRef.current['location'] = el}>
                                {uniqueLocations.map(location => (
                                    <label key={location}>
                                        <input
                                            type="checkbox"
                                            name="location"
                                            value={location}
                                            checked={selectedLocations.includes(location)}
                                            onChange={handleLocationChange}
                                        />
                                        {location}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="filter-container type-filter">
                        <div className="filter-title" onClick={() => setActiveFilter(activeFilter === 'type' ? null : 'type')}>
                            Type
                        </div>
                        {activeFilter === 'type' && (
                            <div className="filter-options" ref={el => filtersRef.current['type'] = el}>
                                {uniqueTypes.map(type => (
                                    <label key={type}>
                                        <input
                                            type="checkbox"
                                            value={type}
                                            checked={selectedTypes.includes(type)}
                                            onChange={handleTypeChange}
                                        />
                                        {type}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <section>
                <div className='races-list'>
                    {sortedRaces.length === 0 ? (
                        <div className="no-results">No races found</div>
                    ) : (
                        <div className='races-list-content'>
                            {sortedRaces.map((race, i) => (
                                <div key={i} className='race-item'>
                                    <div className="race-img">
                                        <img src='/stock_image.webp' alt="Race" />
                                    </div>
                                    <div className="race-details">
                                        <Link key={race.race_event_id} to={`/races/${race.race_event_id}`}>
                                            {race.race_name}
                                        </Link>
                                        <div>{race.date}</div>
                                        <div>{race.race_desc}</div>
                                        <div>{race.type}</div>
                                        <div>{race.registration_open ? "Open" : "Closed"}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default RacesList;
