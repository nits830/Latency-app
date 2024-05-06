
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Write from './pages/Write';
import Header from './components/Header';
import TrendingHero from './components/TrendingHero';
import ProtectedRoute from './components/ProtectedRoute';
import About from './pages/About';
import ContactUs from './pages/ContactUs';






export default function App() {
  return (
      <>
        <Header/>
       
      <Routes>
         
        <Route path="/" element={<Home />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/signin" element={<SignIn />} />  
        
        <Route path="/write" element={<Write />} /> 
        <Route path="/about" element={<About />} />  
        <Route path="/contact" element={<ContactUs />} />  
        <Route path="*" element={<NotFound />} />  
      </Routes>
      </>
    
  )
}