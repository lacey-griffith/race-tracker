import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import AboutPage from './pages/AboutPage';
import RacePage from './pages/RacePage';
import RacesListPage from './pages/RacesListPage';
import RunnerPage from './pages/RunnerPage';
import NotFoundPage from './pages/notFoundpage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <div id='page-body'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/races/:raceId' element={<RacePage/>}/>
          <Route path='/races/:raceId/:runnerId' element={<RunnerPage/>}/>
          <Route path='/races' element={<RacesListPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
          <Route path='/admin-login' element={<AdminPage/>}/>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
