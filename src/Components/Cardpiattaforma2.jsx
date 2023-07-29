import Card from "react-bootstrap/Card";
import eclipse from "../image/eclipse.png";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function BasicExample() {
  const [showCard, setShowCard] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const cardPosition = document.getElementById("piattaforma2").offsetTop;

      if (scrollTop >= cardPosition - window.innerHeight / 2) {
        setShowCard(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <>
      <Card.Img
        id="piattaforma2"
        onClick={handleShowModal}
        className="image-sabri card-piattaforma mx-5"
        src={eclipse}
      />

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Eclipse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Eclipse è un popolare ambiente di sviluppo integrato (IDE) utilizzato
          principalmente per lo sviluppo di software in diversi linguaggi di
          programmazione, come Java, C++, Python e molti altri. Eclipse fornisce
          un'ampia gamma di funzionalità e strumenti che semplificano il
          processo di sviluppo software. Con Eclipse, gli sviluppatori possono
          scrivere, compilare, eseguire e debuggare il proprio codice in modo
          efficace. L'IDE offre funzionalità avanzate come l'autocompletamento
          del codice, il refactoring, il controllo della sintassi, la
          navigazione tra i file e molte altre opzioni che rendono la scrittura
          del codice più efficiente. Inoltre, Eclipse supporta anche
          l'integrazione di plugin che consentono di estendere le funzionalità
          dell'IDE per adattarlo alle specifiche esigenze di sviluppo. Ci sono
          numerosi plugin disponibili per vari framework e tecnologie, come
          Eclipse for Java EE, che fornisce strumenti per lo sviluppo di
          applicazioni web basate su Java. Complessivamente, Eclipse è una
          piattaforma potente e flessibile per gli sviluppatori, che offre un
          ambiente di sviluppo completo e ricco di funzionalità per la creazione
          di software di alta qualità.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BasicExample;
