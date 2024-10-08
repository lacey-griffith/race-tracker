import { useParams, Link } from "react-router-dom";
import races from './race-content';
import RunnersList from "../components/RunnersList";
import NotFoundPage from "./notFoundpage";

const RacePage = () => {
    const {raceId,runnerId} = useParams();
    const race = races.find(race => race.race_event_id === raceId);

    if(!race){
        return <NotFoundPage/>
    }

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