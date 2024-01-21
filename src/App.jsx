import { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ImgResultsPage from './pages/ImgResultsPage';
import './App.css';

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/images-results" element={<ImgResultsPage />} />
      </Routes>
    </Fragment>
  )
}

export default App;
