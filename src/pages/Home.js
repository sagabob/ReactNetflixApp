import React from "react";
import { withRouter } from "react-router";
import { Row } from "../components/rows/Row";
import requests from "../request/request";
import Banner from "../components/Banner";
import BannerRow from "../components/banner/BannerRow";
function Home() {
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
      />
      <BannerRow fetchUrl={requests.fetchTrending} title="TRENDING NOW" />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchAcionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      <br />
    </div>
  );
}

export default withRouter(Home);
