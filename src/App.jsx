import Breakfast from "./components/Breakfast";
import CafeFood from "./components/CafeFood";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";
import MorningTime from "./components/MorningTime";
import WeightLoss from "./components/WeightLoss";

const App = () => {
  return (
  <>
    <Hero />
    <Breakfast />
    <WeightLoss />
    <CafeFood />
    <Info />
    <MorningTime />
    <Footer />
  </>
    );
};

export default App;