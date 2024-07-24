
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';

function App() {
  return (
    <>
        <BrowserRouter>
        <HeaderComponent />
              <Routes >
              </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;