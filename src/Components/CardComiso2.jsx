import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import comiso from "../image/comiso.jpeg";

function BasicExample() {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const cardPosition = document.getElementById("card").offsetTop;

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
      id="card"
      style={{
        width: "18rem",
        opacity: showCard ? 1 : 0,
        transform: showCard ? "translateX(0)" : "translateX(100px)",
        transition: "opacity 0.5s ease, transform 0.8s ease",
      }}
      className="mx-5 mt-5 card-comiso2"
    >
      <Card.Img variant="top" className="cardComisoImg" src={comiso} />
      <Card.Body>
        <Card.Title>COMISO</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
