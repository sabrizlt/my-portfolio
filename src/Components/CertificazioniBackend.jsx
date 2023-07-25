import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";


function BodyOnlyExample() {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
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
    className="mx-auto mt-5 text-light card3">
      <Card.Body id="certificazioni3" className="cardBody rounded">
        Durante il mio percorso front-end tramite un bootcamp, ho acquisito una
        solida base di competenze e conoscenze nel campo dello sviluppo web.
        Attraverso un'intensa esperienza di apprendimento focalizzata sullo
        sviluppo front-end, ho imparato le moderne tecnologie e i framework
        ampiamente utilizzati nell'industria. Il bootcamp mi ha fornito
        un'immersione completa nel mondo dello sviluppo front-end, coprendo i
        principi fondamentali dell'HTML, del CSS e del JavaScript. Ho imparato a
        creare layout e strutturare il contenuto del sito web utilizzando HTML,
        garantendo la corretta semantica dei tag e l'accessibilità. Con il CSS,
        ho acquisito le competenze per la progettazione di interfacce
        accattivanti, utilizzando stili, posizionamenti e animazioni per rendere
        il sito web visivamente attraente e reattivo su diversi dispositivi.
        Inoltre, ho imparato a utilizzare framework e librerie popolari come
        Bootstrap e React. Con Bootstrap, ho potuto sfruttare componenti
        predefiniti e griglie responsive per creare rapidamente interfacce
        moderne e ben strutturate. Con React, ho appreso i concetti di
        componentizzazione, la gestione dello stato e la manipolazione del DOM
        virtuale, che mi hanno permesso di costruire applicazioni front-end
        complesse e interattive. Durante il bootcamp, ho anche lavorato su
        progetti pratici, collaborando con altri sviluppatori e applicando le
        competenze apprese per creare applicazioni web funzionali. Ho avuto
        l'opportunità di affrontare sfide reali nello sviluppo web e di
        migliorare le mie capacità di risoluzione dei problemi. In conclusione,
        il mio percorso front-end tramite il bootcamp mi ha fornito una base
        solida di competenze tecniche e mi ha preparato per intraprendere una
        carriera nel campo dello sviluppo web. Sono in grado di creare
        interfacce user-friendly, implementare funzionalità interattive e
        collaborare con altri sviluppatori per creare soluzioni innovative nel
        mondo digitale.
      </Card.Body>
    </Card>
  );
}

function UncontrolledExample() {
  return (
    <div>
      <Carousel className="w-100 mt-5">
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
  );
}

export default UncontrolledExample;
