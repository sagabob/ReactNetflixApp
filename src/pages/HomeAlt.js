import React from "react";
import { withRouter } from "react-router";
import { Row } from "../components/rows/Row";
import requests from "../request/request";
import BannerRow from "../components/banner/BannerRow";
import Banner from "../components/Banner";

function Home() {
  return (
    <>
      <Banner
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />

      <Row
        isLargeSize={true}
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <BannerRow fetchUrl={requests.fetchTrending} title="Trending Now" />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <br />
    </>
  );
}

export default withRouter(Home);
