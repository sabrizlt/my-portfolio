import Card from "react-bootstrap/Card";
import sabri from '../image/sabri2.jpg';
import React, { useEffect, useState } from "react";


function BasicExample() {
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
    <Card id="card2"
    style={{
      width: "18rem",
      opacity: showCard ? 1 : 0,
      transform: showCard ? "translateX(0)" : "translateX(-300px)",
      transition: "opacity 0.5s ease, transform 1.2s ease",
    }} className="mt-5 sabriCard">
      <Card.Img className="image-sabri" variant="top" src={sabri} />
    </Card>
  );
}

export default BasicExample;