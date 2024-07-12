import React from "react";
import Layout from "../widgets/Layout";
import Btn from "../features/Button";
import Preview from "../widgets/Preview";
import Instruments from "../widgets/Instruments";
import GenImages from "../widgets/GenImages";
const Main = () => {
  return (
    <Layout>
      <Preview />
      <Instruments />
      <GenImages />
    </Layout>
  );
};

export default Main;
