import { useParams, Link } from "react-router-dom";
import races from './race-content';
import RunnersList from "../components/RunnersList";

const RacePage = () => {
    const {raceId,runnerId} = useParams();
    const race = races.find(race => race.race_event_id === raceId);

    return (
        <>
        <h1>{race.race_name}</h1>
        <div className='runner-list d-flex flex-col'>
        <RunnersList race={race}/>
        </div>
        </>
    );
}

export default RacePage;

//<Link key={race.race_event_id} className='race-list-item' to={`/races/${race.race_event_id}`}>