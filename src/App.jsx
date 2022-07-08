import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Row from "./components/Row/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App" id="homepage">
      <Navbar />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        id="NetflixOriginals"
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        id="TrendingNow"
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} id="TopRated" />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries} />
      <Footer />
    </div>
  );
}

export default App;
