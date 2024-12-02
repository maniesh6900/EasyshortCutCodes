import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './pages/button/index';
import Input from './pages/input/input';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/button" element={<Layout />} />
      <Route path="/login-page" element={<Input />} />
      <Route path="/doc" element={<Home/>} />
      </Routes>
    </BrowserRouter>  
    </>
  )
}
 
export default App
