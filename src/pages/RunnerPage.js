import { useParams, Link } from "react-router-dom";
import races from './race-content';

const RunnerPage = () => {
    const {raceId, runnerId} = useParams();
    const race = races.find(race => race.race_event_id === raceId);
    const runner = race.participants.find(participant => participant.participant_id === runnerId);

    //find all races this runner has been in
    const participantRaceInfo = races.map(race => {
        const participant = race.participants.find(p => p.participant_id === runnerId);
        return participant ? { ...race, participant } : null;
    }).filter(race => race !== null);

    return (
        <>
        <h1>{runner.participant_name}</h1>
        <div className='race-list d-flex flex-col'>
        {participantRaceInfo.map(o => 
        <div className='race-item'>
            <Link key={o.race_event_id} to={`/races/${race.race_event_id}`}>
            <p classsName='race-list-item'>{o.race_name}</p>
            </Link>
        </div>
        )}
        </div>
        </>
    );
}

export default RunnerPage;