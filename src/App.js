import { DesktopNav } from "./components/DesktopNav";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MobileNav } from "./components/MobileNav";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Thankyou } from "./pages/Thankyou";
import { Banner } from "./pages/Banner";

function App() {
  return (
   <Router>
    <MobileNav/>
    <DesktopNav/>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/thankyou' element={<Thankyou/>}/>
      <Route path='/banner' element={<Banner />}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
