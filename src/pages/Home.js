import React, { useState } from "react";
import { withRouter } from "react-router";
import { Row } from "../components/Row";
import requests from "../request/request";
import Banner from "../components/Banner";

function Home() {
  const [trailerUrl, setTrailerUrl] = useState({ row: null, trailerUrl: null });

  const props = { trailerUrl, setTrailerUrl };

  return (
    <div>
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
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} {...props} />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchAcionMovies}
        {...props}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        {...props}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        {...props}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        {...props}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        {...props}
      />

      <br />
    </div>
  );
}

export default withRouter(Home);
