import React from "react";
import { withRouter } from "react-router";
import { Row } from "../components/rows/Row";
import requests from "../request/request";
import Banner from "../components/banner/BannerV2";

function Home() {
  return (
    <div>
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row
        isLargeSize={true}
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <br />
    </div>
  );
}

export default withRouter(Home);
