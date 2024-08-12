import { useParams, Link } from "react-router-dom";
import races from './race-content';

const RacePage = () => {
    const {raceId,runnerId} = useParams();
    const race = races.find(race => race.race_event_id === raceId);

    return (
        <>
        <h1>{race.race_name}</h1>
        <div className='runner-list d-flex flex-col'>
        
        {/* Loop through runners and display them*/}
        {race.participants.map((runner, i) => (
        <div className='runner'>
            <Link key={runner.participant_id} to={`/races/${race.race_event_id}/${runner.participant_id}`}>
            <p key={i}><span class='placement'>{runner.placement}</span>{runner.participant_name}</p>
            </Link>
            </div>
        ))}
        </div>
        </>
    );
}

export default RacePage;

//<Link key={race.race_event_id} className='race-list-item' to={`/races/${race.race_event_id}`}>