import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

const RacesList = ({ races }) => {
    // Initial sort configuration: sort by date, descending (most recent first)
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });

    // Sorting function
    const sortedRaces = [...races].sort((a, b) => {
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

    // Function to handle sorting request
    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    // Function to render sorting icons
    const renderSortIcon = (key) => {
        if (sortConfig.key === key) {
            if (sortConfig.direction === 'asc') {
                return <FontAwesomeIcon icon={faSortUp} />;
            } else {
                return <FontAwesomeIcon icon={faSortDown} />;
            }
        }
        return null;
    };

    return (
        <>
            <table className='races-list-table'>
                <thead>
                    <tr>
                        <th></th>
                        <th onClick={() => requestSort('race_name')}>
                            Race Name {renderSortIcon('race_name')}
                        </th>
                        <th onClick={() => requestSort('date')}>
                            Date {renderSortIcon('date')}
                        </th>
                        <th onClick={() => requestSort('race_desc')}>
                            Location {renderSortIcon('race_desc')}
                        </th>
                        <th onClick={() => requestSort('registration_open')}>
                            Registration {renderSortIcon('registration_open')}
                        </th>
                    </tr>
                </thead>

                <tbody className="race-list-wrapper">
                    {sortedRaces.map((race, i) => (
                        <tr key={i} className='race-list-content' style={{ borderBottom: '10px solid transparent' }}>
                            <td className="img-wrapper">
                                <img src='/stock_image.webp' alt="Race" />
                            </td>
                            <td>
                                <Link key={race.race_event_id} className='race-list-wrapper' to={`/races/${race.race_event_id}`}>
                                    {race.race_name}
                                </Link>
                            </td>
                            <td>{race.date}</td>
                            <td>{race.race_desc}</td>
                            <td>{race.registration_open ? "Open" : "Closed"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default RacesList;



/*import {Link} from 'react-router-dom';

const racesList = ({races}) => {
    return (
        <>
        <table className='races-list-table'>
            <thead>
                <tr>
                <th></th>
                <th>Race Name</th>
                <th>Date</th>
                <th>Location</th>
                <th>Registration</th>
                </tr>
            </thead>

            <tbody className="race-list-wrapper">
            {races.map((race, i) => (
                <tr key={i} className='race-list-content'>
                    {race.tags.map(tag => (
                        <span>{tag.text}</span>
                    ))}
                    <td className="img-wrapper"><img src='/stock_image.webp'/></td>
                    <td>
                        <Link key={race.race_event_id} className='race-list-wrapper' to={`/races/${race.race_event_id}`}>
                            {race.race_name}
                        </Link>
                    </td>
                    <td>{race.date}</td>
                    <td>{race.race_desc}</td>
                    <td>{race.registration_open ? "Open" : "Closed"}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    )
}

export default racesList;*/