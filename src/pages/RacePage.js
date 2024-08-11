import { useParams } from "react-router-dom";
import races from './race-content';

const RacePage = () => {
    const {raceId} = useParams();
    const race = races.find(race => race.race_event_id === raceId);

    return (
        <>
        <h1>{race.race_name}</h1>
        {race.participants.map((runner, i) => (
            <p key={i}>{runner.participant_id}</p>
        ))}
        </>
    );
}

export default RacePage;