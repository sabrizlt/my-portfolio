import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";

function BodyOnlyExample() {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const cardPosition = document.getElementById("certificazioni2").offsetTop;

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
      id="certificazioni2"
      style={{
        opacity: showCard ? 1 : 0,
        transform: showCard ? "translateY(0)" : "translateY(-300px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
      className="mx-auto mt-5 text-light card2"
    >
      <Card.Body id="certificazioni2" className="cardBody rounded">
        Durante il mio percorso front-end tramite Epicode, ho acquisito una
        solida base di competenze e conoscenze nel campo dello sviluppo web
        focalizzate su React. Questa intensa esperienza di apprendimento mi ha
        permesso di diventare proficienti nelle moderne tecnologie e nei
        framework ampiamente utilizzati nell'industria dello sviluppo web. Ho
        iniziato imparando i principi fondamentali di HTML, CSS e JavaScript,
        che mi hanno permesso di creare layout e strutturare il contenuto dei
        siti web. La mia formazione su React è stata un elemento centrale del
        percorso. Ho imparato i concetti di base di React, come la creazione di
        componenti riutilizzabili e lo stato dello stato (state) dei componenti.
        Ho sviluppato una solida comprensione della Virtual DOM di React e di
        come questo approccio ottimizza il rendering delle interfacce utente.
        Inoltre, ho avuto l'opportunità di imparare ad utilizzare librerie e
        framework complementari come Bootstrap per facilitare la creazione di
        interfacce responsive e ben strutturate. Con Bootstrap, ho sfruttato
        componenti predefiniti e griglie responsive per creare rapidamente
        interfacce moderne. Durante il bootcamp, ho anche lavorato su progetti
        pratici basati su React, collaborando con altri colleghi per applicare
        le competenze acquisite e creare applicazioni web interattive e
        funzionali. Questi progetti mi hanno aiutato a migliorare le mie
        capacità di risoluzione dei problemi e a comprendere l'importanza della
        collaborazione nello sviluppo software. In conclusione, il mio percorso
        front-end tramite il bootcamp con focus su React mi ha fornito una base
        solida di competenze tecniche e mi ha preparato per intraprendere una
        carriera nel campo dello sviluppo web focalizzato su React. Sono ora in
        grado di creare interfacce user-friendly, utilizzando questo framework potente e
        popolare.
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
                src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/642d2f35bac0ee5aaa23acd1.png"
                alt="Fourth slide"
                style={{
                  boxShadow: "5px 10px 10px #000000",
                }}
              />

              <img
                className="mx-4 imgCarousel"
                src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/643001cb275a39b7b3f8a022.png"
                alt="Fifth slide"
                style={{
                  boxShadow: "5px 10px 10px #000000",
                }}
              />

              <img
                className="mx-4 imgCarousel"
                src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/64390ead7761cef823944563.png"
                alt="Sixth slide"
                style={{
                  boxShadow: "5px 10px 10px #000000",
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
