import {Link} from 'react-router-dom';
import races from './race-content';

const RacesListPage = () => {
    return (
        <>
        <h1>All Races</h1>
        {/* Loop through races to display them all*/}
        {races.map((race, i) => (
            <Link key={race.race_event_id} className='race-list-item' to={`/races/${race.race_event_id}`}>
                <h3>{race.race_name}</h3>
                <p>{race.race_desc}</p>
                </Link>
        ))}
        </>
    )
}

export default RacesListPage;