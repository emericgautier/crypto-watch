import React from "react";
import GlobalChart from "./components/GlobalChart";
import HeaderInfos from "./components/HeaderInfos";

const App = () => {
  return (
    <div className="app-container">
      <header>
        <HeaderInfos />
        <GlobalChart />
      </header>
    </div>
  );
};

export default App;
