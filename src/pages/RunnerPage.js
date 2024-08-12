import { useParams, Link } from "react-router-dom";
import races from './race-content';
import NotFoundPage from "./notFoundpage";

const RunnerPage = () => {
    const {raceId, runnerId} = useParams();
    const race = races.find(race => race.race_event_id === raceId);
    const runner = race.participants.find(participant => participant.participant_id === runnerId);

    //find all races this runner has been in
    const participantRaceInfo = races.map(race => {
        const participant = race.participants.find(p => p.participant_id === runnerId);
        return participant ? { ...race, participant } : null;
    }).filter(race => race !== null);

    if(!runner){
        return <NotFoundPage/>
    }

    return (
        <>
        <h1>{runner.participant_name}</h1>
        <h6>Total Races: {participantRaceInfo.length}</h6>

        <div className='race-list d-flex flex-col'>
        {participantRaceInfo.map((o,i) => 
        <div className='race-item' key={i}>
            <Link key={o.race_event_id} to={`/races/${race.race_event_id}`}>
            <p classsname='race-list-item'>{o.race_name}</p>
            </Link>
        </div>
        )}
        </div>
        </>
    );
}

export default RunnerPage;