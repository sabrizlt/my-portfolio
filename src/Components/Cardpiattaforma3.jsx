import Card from "react-bootstrap/Card";
import pgadmin from "../image/pgadmin.png";
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
      const cardPosition = document.getElementById("piattaforma3").offsetTop;

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
        id="piattaforma3"
          onClick={handleShowModal}
          className="image-sabri card-piattaforma mx-5"
          src={pgadmin}
        />

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Pg Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          PgAdmin è un potente strumento di amministrazione per database
          PostgreSQL. Con PgAdmin, gli amministratori di database possono
          gestire facilmente i loro server, database, schemi, tabelle e altri
          oggetti di database. PgAdmin offre un'interfaccia intuitiva e
          user-friendly che consente di eseguire una vasta gamma di operazioni,
          come la creazione e l'eliminazione di database, l'esecuzione di query
          SQL, la gestione degli utenti e dei privilegi, e molto altro ancora.
          Inoltre, PgAdmin supporta funzionalità avanzate come la creazione di
          diagrammi ER, la gestione delle estensioni e la visualizzazione delle
          statistiche di monitoraggio del database. Grazie a PgAdmin, gli
          amministratori di database possono lavorare in modo efficiente e
          sicuro, semplificando la gestione e il monitoraggio dei loro database
          PostgreSQL.
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
