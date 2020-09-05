import React from "react";
import { withRouter } from "react-router";
import Banner from "../components/banner/BannerV2";
import requests from "../request/request";

function Home() {
  return (
    <div>
      <Banner fetchUrl={requests.fetchNetflixOriginals} />

      <br />
    </div>
  );
}

export default withRouter(Home);
