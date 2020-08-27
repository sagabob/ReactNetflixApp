import React from "react";
import { withRouter } from "react-router";
import { Row } from "../components/rows/Row";
import requests from "../request/request";
import Banner from "../components/banner/BannerV2";
import slides from "../components/banner/sample";

function Home() {
  return (
    <div>
      <Banner slides={slides} />
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
