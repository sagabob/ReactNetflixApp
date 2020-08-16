import React from "react";
import { withRouter } from "react-router";
import { RowV1 } from "../components/rows/RowV1";
import requests from "../request/request";
import Banner from "../components/Banner";

function Home() {
  return (
    <div>
      <Banner
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />

      <RowV1 title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <br />
    </div>
  );
}

export default withRouter(Home);
