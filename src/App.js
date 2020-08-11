import React, { useState } from "react";
import "./App.css";
import { Row } from "./components/Row";
import requests from "./request/request";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const [trailerUrl, setTrailerUrl] = useState({ row: null, trailerUrl: null });

  const props = { trailerUrl, setTrailerUrl };

  return (
    <div className="app">
      <Nav />
      <Banner
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row
        isLargeSize={true}
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        {...props}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} {...props} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchAcionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      <br />

      <Footer />
    </div>
  );
}

export default App;
