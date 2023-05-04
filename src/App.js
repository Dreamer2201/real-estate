import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HomePage from './pages/HomePage';
import AboutCompanyPage from './pages/about/AboutPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import HousesPage from './pages/houses/HousesPage';
import DuplexesPage from './pages/duplexes/DuplexesPage';
import './App.css';
import Layout from './Layout/Layout';
import SingleHousePage from './pages/singleHousePage/SingleHousePage';
import AddHouse from './components/addHouse/AddHouse';
import NewsPage from './pages/newsPage/NewsPage';
import SingleNewPage from './pages/SingleNewPage.jsx/SingleNewPage';
import { fetchCurrentUser } from './redux/api/usersAPI';


function App() {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutCompanyPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/houses' element={<HousesPage />} />
        <Route path='/houses/:id' element={<SingleHousePage />} />
        <Route path='/duplexes' element={<DuplexesPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/addhouse' element={<AddHouse />} />
        <Route path='/news/:id' element={<SingleNewPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
