import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testionials from "./components/Testionials/Testionials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Key Services" title="What We Offer" />
        <Programs />
        <About setShowVideo={setShowVideo} />
        <Title subTitle="Testimonials" title="What Clients Says" />
        <Testionials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer showVideo={showVideo} setShowVideo={setShowVideo} />
    </div>
  );
};

export default App;
