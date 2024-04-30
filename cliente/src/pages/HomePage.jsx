import Navigation from "../components/navegacion/Navigation";
import Home from "../components/navegacion/Homeindex.jsx";
import NServicios from "../components/navegacion/NServicios.jsx";
import Eventos from "../components/navegacion/Eventos.jsx";
import Gallery from "../components/navegacion/Gallery.jsx";
import Footerindex from "../components/navegacion/Footerindex.jsx";


function HomePage() {
  return (
    <div>
      <Navigation/>
      <Home/>      
      <NServicios/>
      <Eventos/>
      <Gallery/>
      <Footerindex/>
      
    </div>
  );
}

export default HomePage;
