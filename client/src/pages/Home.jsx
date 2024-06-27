import React from "react";
import Layout from "../components/Layout";
import CategoryDisplay from "../components/CategoryDisplay";

const Home = () => {
  return (
    <Layout>
      <div className="mx-24">
        <CategoryDisplay />
      </div>
    </Layout>
  );
};

export default Home;
