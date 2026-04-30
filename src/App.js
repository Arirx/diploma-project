import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Home      from './pages/Home';
import About     from './pages/About';
import Products  from './pages/Products';
import Services  from './pages/Services';
import Vacancies from './pages/Vacancies';
import Delivery  from './pages/Delivery';
import Contacts  from './pages/Contacts';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppInner() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/"          element={<Home />}      />
          <Route path="/about"     element={<About />}     />
          <Route path="/products"  element={<Products />}  />
          <Route path="/services"  element={<Services />}  />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/delivery"  element={<Delivery />}  />
          <Route path="/contacts"  element={<Contacts />}  />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppInner />
      </BrowserRouter>
    </LanguageProvider>
  );
}
