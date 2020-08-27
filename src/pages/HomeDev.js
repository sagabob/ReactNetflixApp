import React from "react";
import { withRouter } from "react-router";

import Banner from "../components/banner/BannerV2";
import slides from "../components/banner/sample";

function Home() {
  return (
    <div>
      <Banner slides={slides} />

      <br />
    </div>
  );
}

export default withRouter(Home);
