import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import postman from "../image/postman.png";

function BasicExample() {
  const [showCard, setShowCard] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const cardPosition = document.getElementById("piattaforma4").offsetTop;

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
      <Card
        id="piattaforma4"
        style={{
          width: "9rem",
          opacity: showCard ? 1 : 0,
          transform: showCard ? "translateX(0px)" : "translateX(-400px)",
          transition: "opacity 1s ease, transform 1.4s ease",
        }}
        className="mt-5 card-piattaforma mx-5 piattaformaCard"
      >
        <Card.Img
          onClick={handleShowModal}
          className="image-sabri card-piattaforma piattaformaCard"
          variant="top"
          src={postman}
        />
      </Card>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Postman</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Postman è uno strumento molto utile per gli sviluppatori di API. Con
          Postman, è possibile inviare richieste HTTP personalizzate agli
          endpoint desiderati e analizzare le risposte ricevute. Questo
          strumento consente di testare e debuggare facilmente le API, fornendo
          un'interfaccia intuitiva e user-friendly. Postman supporta vari tipi
          di richieste, come GET, POST, PUT e DELETE, e offre anche funzionalità
          avanzate come l'autenticazione e la gestione delle collezioni di
          richieste. È uno strumento indispensabile per gli sviluppatori che
          lavorano con servizi web e API, semplificando notevolmente il processo
          di sviluppo e test delle applicazioni.
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
