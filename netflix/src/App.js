import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import TVShowsSection from "./components/TVShowsSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ backgroundColor: "#211F1F" }} className="text-white">
      <CustomNavbar />
      <div className="container-fluid px-4">
        <TVShowsSection />
        <h4>Trending Now</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <Gallery filmTitle="star+wars" />
        </div>
        <h4>Watch it Again</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <Gallery filmTitle="harry+potter" />
        </div>
        <h4>New Releases</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <Gallery filmTitle="jurassic+park" />
        </div>
        <div className="row justify-content-center mt-5">

          <Footer />
        </div>

      </div>
    </div>
  );
}

export default App;
