import races from './race-content';
import RacesList from '../components/RacesList';


const RacesListPage = () => {
    return (
        <>
        <h1>All Races</h1>
        <RacesList races={races}/>
        </>
    )
}

export default RacesListPage;