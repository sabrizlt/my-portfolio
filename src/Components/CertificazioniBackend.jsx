import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";

function BodyOnlyExample() {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const cardPosition = document.getElementById("certificazioni3").offsetTop;

      if (scrollTop >= cardPosition - window.innerHeight / 2) {
        setShowCard(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Card
      id="certificazioni3"
      style={{
        opacity: showCard ? 1 : 0,
        transform: showCard ? "translateY(0)" : "translateY(-300px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
      className="mx-auto mt-5 text-light card3"
    >
      <Card.Body id="certificazioni3" className="cardBody rounded">
        Durante il mio percorso nel backend, ho acquisito una solida base di
        competenze e conoscenze focalizzate su Java, Hibernate, JPA , PostgreSQL e Spring Boot. Questa esperienza di
        apprendimento intensiva mi ha permesso di diventare competente nelle
        moderne tecnologie e nei framework ampiamente utilizzati nello sviluppo
        web lato server. Ho iniziato imparando i fondamenti di Java, uno dei
        linguaggi di programmazione più popolari e potenti utilizzati per lo
        sviluppo back-end. Durante questo percorso, ho acquisito una
        comprensione approfondita delle strutture dati, delle classi, delle
        interfacce e delle funzionalità orientate agli oggetti di Java.
        Successivamente, ho studiato Hibernate e JPA, due tecnologie correlate
        utilizzate per il mapping oggetti-relazional nel contesto di Java.
        Questi framework mi hanno permesso di interagire con il database
        PostgreSQL in modo più semplice e diretto, consentendomi di memorizzare
        e recuperare oggetti Java nel database relazionale senza dover scrivere
        query SQL manualmente. Inoltre, ho approfondito Spring Boot, che è un
        framework di sviluppo basato su Spring progettato per semplificare e
        accelerare la creazione di applicazioni Java. Con Spring Boot, ho
        appreso come configurare rapidamente un'applicazione web, gestire le
        dipendenze e sviluppare API RESTful per comunicare con il front-end
        basato su React. Spring Boot è noto per la sua facilità d'uso e il
        supporto per le migliori pratiche nello sviluppo di applicazioni.
        Infine, ho studiato PostgreSQL, un sistema di gestione di database
        relazionali ampiamente utilizzato nel mondo dello sviluppo back-end. Ho
        imparato come progettare lo schema del database, creare tabelle,
        definire relazioni e scrivere query complesse per gestire i dati
        all'interno dell'applicazione. Durante il bootcamp, ho avuto
        l'opportunità di lavorare su progetti pratici basati su Java, Hibernate,
        JPA, PostgreSQL e Spring Boot.
      </Card.Body>
    </Card>
  );
}

function UncontrolledExample() {
  return (
    <div>
      <div className="carousel-container">
        <Carousel className="w-100 mt-5" nextIcon={null} prevIcon={null}>
          <Carousel.Item>
            <div className="d-flex">
              <img
                className="mx-4 imgCarousel"
                src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/64550529bd9a6a043e95a83b.png"
                alt="Fourth slide"
                style={{
                  boxShadow: "5px 10px 5px #000000",
                }}
              />

              <img
                className="mx-4 imgCarousel"
                src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/645dff34a052a6c56609fc64.png"
                alt="Fifth slide"
                style={{
                  boxShadow: "5px 10px 5px #000000",
                }}
              />

              <img
                className="mx-4 imgCarousel"
                src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/646732f80f1a165908494c1e.png"
                alt="Sixth slide"
                style={{
                  boxShadow: "5px 10px 5px #000000",
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex">
              <img
                className="mx-4 imgCarousel"
                src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/6478af3d7cb75b2b0eb71e66.png"
                alt="Fourth slide"
                style={{
                  boxShadow: "5px 10px 10px #000000",
                }}
              />

              <img
                className="mx-4 imgCarousel"
                src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/6482e5fad57caba8fe95362e.png"
                alt="Fifth slide"
                style={{
                  boxShadow: "5px 10px 5px #000000",
                }}
              />

              <img
                className="mx-4 imgCarousel"
                src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/6482e5fad57caba8fe95362e.png"
                alt="Sixth slide"
                style={{
                  boxShadow: "5px 10px 5px #000000",
                }}
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <BodyOnlyExample />
      </div>
    </div>
  );
}

export default UncontrolledExample;
