import React from "react";
import Feature from "./Components/FeatureSection/Feature";
import Footer from "./Components/FooterSection/Footer";
import Jumbo from "./Components/JumboSection/Jumbo";
import Handle from "./Components/RestraInPocket/Handle";
function App() {
  return (
    <div className="app">
      <Jumbo />
      <Feature />
      <Handle />
      <Footer />
    </div>
  );
}

export default App;
