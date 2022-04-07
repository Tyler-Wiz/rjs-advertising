import { Clients } from "./components/Clients";
import { DesktopNav } from "./components/DesktopNav";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <DesktopNav/>
      <Hero/>
      <Clients/>
      <Services/>
      <Footer/>
    </>
  );
}

export default App;
