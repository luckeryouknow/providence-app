import Header from "./components/Header/Header";
import HeaderTextBlock from "./components/HeaderTextBlock/HeaderTextBlock";
import Features from "./components/Features/Features";
import ProtectionFeature from "./components/ProtectionFeature/ProtectionFeature";
import MapFeatures from "./components/MapFeatures/MapFeatures";
import Interface from "./components/Interface/Interface";
import Carousel from "./components/Carousel/Carousel";
import NewsLetters from "./components/NewsLetters/NewsLetter";
import Plans from "./components/Plans/Plans";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderTextBlock />
      <Features />
      <ProtectionFeature />
      <MapFeatures />
      <Interface />
      <Carousel />
      <Plans />
      <NewsLetters />
      <Footer />
    </div>
  );
}

export default App;
