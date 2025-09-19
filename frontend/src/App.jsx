import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Light dotted mesh background in Propti blue */}
     

      <Navbar />
      <Hero />
      <Footer/>
    </div>
  );
}

export default App;
