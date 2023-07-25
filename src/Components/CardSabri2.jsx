import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";


function BodyOnlyExample() {
  const [showCard, setShowCard] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const cardPosition = document.getElementById("card2").offsetTop;
    
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
    id="card2"
    style={{
      width: "18rem",
      opacity: showCard ? 1 : 0,
      transform: showCard ? "translateX(0)" : "translateX(-300px)",
      transition: "opacity 0.5s ease, transform 1.2s ease",
    }} className="mx-5 w-50 card-sabri2 sabriCard">
      <Card.Body className="fs-6">
        Ho completato con successo un corso fullstack di 6 mesi e sono
        estremamente orgoglioso dei risultati che ho ottenuto. Durante questo
        periodo intensivo di apprendimento, ho dedicato tutte le mie energie a
        sviluppare competenze complete nel campo dello sviluppo web. Durante il
        corso, ho immergessi completamente nella programmazione front-end,
        imparando i linguaggi fondamentali come HTML, CSS e JavaScript. Ho
        acquisito la capacità di creare layout accattivanti, gestire l'aspetto
        visivo delle pagine web e aggiungere interattività attraverso funzioni
        dinamiche e animazioni. Grazie a queste competenze, sono in grado di
        creare siti web che non solo catturano l'attenzione, ma offrono anche
        un'esperienza utente coinvolgente.
      </Card.Body>
    </Card>
  );
}

export default BodyOnlyExample;
