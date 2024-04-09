import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <>
      <Layout />
      <SpeedInsights />
      <Analytics />
    </>
  );
};

export default App;
