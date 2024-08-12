import {Link} from 'react-router-dom';

const runnersList = ({race}) => {
    return (
        <>
            {race.participants.map((runner, i) => (
                <Link key={i} className='race-list-item' to={`/races/${race.race_event_id}/${runner.participant_id}`}>
                    {console.log(runner)}
                    <h3>{runner.participant_name}</h3>
                    <p>Place: {runner.placement}</p>
                </Link>
            ))}
        </>
    )
}

export default runnersList;