
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import ExploreComponent from './Components/ExploreComponent/ExploreComponent';
import AboutComponent from './Components/AboutComponent/AboutComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// function App() {
//   const location = useLocation();
//   return (
//     <>
//       <BrowserRouter>
//         <HeaderComponent />
//         <div className='content-page' >
//           <Routes >
//             <Route path='/' exact={true} element={<HomeComponent />} />
//             <Route path='/explore' exact={true} element={<ExploreComponent />} />
//             <Route path='/about' exact={true} element={<AboutComponent />} />
//           </Routes>
//         </div>
//         <FooterComponent />
//       </BrowserRouter>
//     </>
//   )
// }
function MainContent() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      offset: 200, // Offset (in px) from the original trigger point
      easing: 'ease', // Easing function
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: true, // Whether elements should animate out while scrolling past them
    });
    // Refresh animations on scroll
    window.addEventListener('scroll', AOS.refresh);

    return () => {
      window.removeEventListener('scroll', AOS.refresh);
    };
  }, []);
  return (
    <>
      <HeaderComponent />
      <div className='content-page'>
        <Routes>
          <Route path='/' exact element={<HomeComponent />} />
          <Route path='/explore' exact element={<ExploreComponent />} />
          <Route path='/about' exact element={<AboutComponent />} />
        </Routes>
      </div>
    </>
  );
}
function App() {
  useEffect(() => {
    AOS.refresh();
  });

  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}
export default App;