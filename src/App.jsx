import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import History from "./sections/History";
import MainPage from "./sections/MainPage";
import Services from "./sections/Services";
import Where from "./sections/Where";

const App = () => {
  return (
  <div>
    <Navbar />
    <MainPage />
    <History />
    <About />
    <Services />
    <Where />
    <Contact />
  </div>
  )};

export default App;