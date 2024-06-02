import React, { useState } from "react";
import Header from "../../component/common/header";
import TabOptions from "../../component/common/tabOptions";
import Footer from "../../component/common/footer";
import DiningOut from "../../component/diningOut/diningOut";
import Delivery from "../../component/delivery/delivery";
import NightLife from "../../component/nightLife/nightLife";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Dining Out");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Dining Out":
      return <DiningOut />;
    case "Delivery":
      return <Delivery />;
    case "NightLife":
      return <NightLife />;
    default:
      return <NightLife />;
  }
};

export default HomePage;
