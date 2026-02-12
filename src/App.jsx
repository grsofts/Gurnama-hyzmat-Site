import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import { useEffect } from 'react';

//pages
import Home from './pages/home/home';
import Contacts from './pages/contacts/Contacts';
import AboutUs from './pages/about/AboutUs';
import Services from './pages/services/Services';
import Projects from './pages/projects/Projects';
import NotFound from './pages/404/404';
import SingleProject from './pages/projects/single/SingleProject';
import SingleService from './pages/services/single/SingleService';
// import { useTranslation } from 'react-i18next';


function App() {
  // const { t } = useTranslation();
  
   useEffect(() => {
    // ждём, пока DOM реально отрисуется
    const timer = setTimeout(() => {
      if (window.initTemplate) {
        window.initTemplate();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
     <Routes>
      <Route
        path="/"
        element={
            <AppLayout />
        }
      >
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:id" element={<SingleService />} />
        <Route path="projects" element={<Projects  />} />
        <Route path='projects/:id' element={<SingleProject/>}/>
      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
