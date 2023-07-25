import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";


function BodyOnlyExample() {
    const [showCard, setShowCard] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const cardPosition = document.getElementById("card3").offsetTop;
    
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
    id="card3"
    style={{
      width: "18rem",
      opacity: showCard ? 1 : 0,
      transform: showCard ? "translateX(0)" : "translateX(300px)",
      transition: "opacity 0.5s ease, transform 1.2s ease",
    }}
    className="mx-5 w-50 card-sabri3 mt-5 sabriCard">
      <Card.Body className="fs-6">
        Ma non mi sono fermato solo al front-end. Ho affrontato con
        determinazione lo studio del back-end, familiarizzando con linguaggi
        come Python, PHP e JavaScript per sviluppare server robusti e
        implementare logiche di business complesse. Ho imparato a lavorare con
        database, creare query per l'estrazione e la manipolazione dei dati, e
        implementare funzionalità avanzate come l'autenticazione degli utenti e
        l'elaborazione dei pagamenti. Durante il corso, ho anche sperimentato
        con i principali framework e librerie utilizzati nello sviluppo web,
        come React, Angular o Vue.js. Queste tecnologie mi hanno permesso di
        creare interfacce utente sofisticate, organizzare il codice in modo
        modulare e aumentare l'efficienza del mio lavoro. Ho apprezzato
        particolarmente la flessibilità e la potenza che questi strumenti
        offrono nello sviluppo di applicazioni web complesse.
      </Card.Body>
    </Card>
  );
}

export default BodyOnlyExample;
