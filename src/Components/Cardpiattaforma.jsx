import Card from "react-bootstrap/Card";
import vscode from "../image/vscode.jpeg";
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
      const cardPosition = document.getElementById("piattaforma").offsetTop;

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
        id="piattaforma"
          onClick={handleShowModal}
          className="image-sabri card-piattaforma mx-5"
          src={vscode}
        />

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Visual Studio Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Visual Studio Code è un editor di codice leggero e altamente
          personalizzabile, sviluppato da Microsoft. È ampiamente utilizzato
          dagli sviluppatori per una vasta gamma di linguaggi di programmazione,
          tra cui JavaScript, Python, C++, Java e molti altri. Visual Studio
          Code offre un'ampia gamma di funzionalità che migliorano il flusso di
          lavoro degli sviluppatori. Tra le caratteristiche più apprezzate ci
          sono l'autocompletamento intelligente del codice, la formattazione
          automatica, il debug integrato, il controllo di versione integrato e
          la possibilità di estendere le funzionalità attraverso una vasta gamma
          di estensioni. L'editor supporta anche il controllo dei pacchetti e
          delle dipendenze, consentendo agli sviluppatori di gestire facilmente
          le librerie e gli strumenti di terze parti necessari per i loro
          progetti. Visual Studio Code offre un'interfaccia pulita e intuitiva,
          che favorisce una produttività elevata. Inoltre, grazie alla sua
          natura leggera, è noto per la sua velocità ed efficienza
          nell'esecuzione delle operazioni. Complessivamente, Visual Studio Code
          è un potente editor di codice che combina la semplicità di un editor
          di testo con le funzionalità avanzate di un ambiente di sviluppo
          integrato. È ampiamente utilizzato e apprezzato dagli sviluppatori di
          tutto il mondo per la sua flessibilità, estensibilità e facilità
          d'uso.
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
