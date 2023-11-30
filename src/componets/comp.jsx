import React, { useEffect, useRef, useState } from "react";
import "../style.css";
import { Card } from "react-bootstrap";

const CardComponent = () => {
  const cardRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetCard = entry.target.querySelector(".card");
          targetCard.classList.toggle("show", entry.isIntersecting);
        });
      },
      {
        threshold:.4,
      }
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={cardRef} className={`card-container ${isVisible ? "show" : ""}`}>
      <Card>
        <Card.Title>Card Title 1</Card.Title>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Title>Card Title 2</Card.Title>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Title>Card Title 3</Card.Title>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Title>Card Title 4</Card.Title>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    
    </div>
  );
};

export default CardComponent;
