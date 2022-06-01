import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <div class="position-absolute pt-5 start-50 translate-middle">
        <h4>Inventory list</h4>
      </div>
      <div className="pt-5">
        <Header />
      </div>
    </div>
  );
};

export default Home;
