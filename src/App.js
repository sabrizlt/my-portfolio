import React from "react";
import "./App.css";
import Navbar from "./Components/MyNavbar";
import Certificazioni from "./Components/Certificazioni";
import CertificazioniReact from "./Components/CertificazioniReact";
import CertificazioniBackend from "./Components/CertificazioniBackend";
import CertificazioneFinale from "./Components/CertificazioneFinale";
import Footer from "./Components/Footer";
import Maps from "./Components/Maps";
import VideoCard from "./Components/VideoCard";
import CardSabri from "./Components/CardSabri";
import CardSabri2 from "./Components/CardSabri2";
import CardSabri3 from "./Components/CardSabri3";
import CardSabri4 from "./Components/CardSabri4";
import CardPiattaforma from "./Components/Cardpiattaforma";
import CardPiattaforma2 from "./Components/Cardpiattaforma2";
import CardPiattaforma3 from "./Components/Cardpiattaforma3";
import CardPiattaforma4 from "./Components/Cardpiattaforma4";
import Project from "./Components/Project";
import Curriculum from "./Components/Curriculum";


import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 id="home" className="mx-auto fw-bold titolo">
        BLOG
      </h1>
      <div class="text-white mx-auto rounded sottotitolo mt-5  d-flex align-items-center justify-content-center">
        <h2 class="m-0 ">SU DI ME</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center comisoCard">
        <Maps />
        <VideoCard />
      </div>
      <div className="d-flex justify-content-center align-items-center sabriCard">
      <CardSabri/>
      <CardSabri2/>
      </div>
      <div className="d-flex justify-content-center align-items-center sabriCard">
      <CardSabri3/>
      <CardSabri4/>
      </div>
      <div class="text-white mx-auto rounded sottotitolo mt-5  d-flex align-items-center justify-content-center">
        <h2 class="m-0 ">CURRICULUM</h2>
      </div>
      <Curriculum />
      <h1 className="mx-auto fw-bold titolo" id="certificazioni">
        PORTFOLIO
      </h1>
     
      <div class="text-white mx-auto rounded sottotitolo mt-5  d-flex align-items-center justify-content-center">
        <h2 class="m-0 ">PIATTAFORME</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center platform">
        <CardPiattaforma/>
        <CardPiattaforma2/>
        <CardPiattaforma3/>
        <CardPiattaforma4/>
      </div>
      <div class="text-white mx-auto rounded sottotitolo mt-5  d-flex align-items-center justify-content-center">
        <h2 class="m-0 ">PROGETTI</h2>
      </div>
      <Project />
      <h1 className="mx-auto fw-bold titolo" id="certificazioni">
        CERTIFICAZIONI
      </h1>
      <CertificazioneFinale />

      <div class="text-white mx-auto rounded sottotitolo mt-5  d-flex align-items-center justify-content-center">
        <h2 class="m-0  marquee">FRONTEND</h2>
      </div>
      <Certificazioni />
      <div class="text-white rounded mx-auto sottotitolo mt-5  d-flex align-items-center justify-content-center">
        <h2 className="m-0  marquee">REACT</h2>
      </div>
      <CertificazioniReact />
      <div class="text-white rounded mx-auto sottotitolo mt-5  d-flex align-items-center justify-content-center">
        <h2 className="m-0  marquee">BACKEND</h2>
      </div>
      <CertificazioniBackend />
      <Footer />
    </div>
  );
}

export default App;
