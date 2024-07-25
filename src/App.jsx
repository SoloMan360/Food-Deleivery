
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import ExploreComponent from './Components/ExploreComponent/ExploreComponent';
import AboutComponent from './Components/AboutComponent/AboutComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <div className='content-page' >
          <Routes >
            <Route path='/' exact={true} element={<HomeComponent />} />
            <Route path='/explore' exact={true} element={<ExploreComponent />} />
            <Route path='/about' exact={true} element={<AboutComponent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;