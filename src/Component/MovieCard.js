import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MovieList from "./MovieList";
import "./Card.css";
import Rating from "react-rating-stars-component";

function SerieCard() {
  return (
    <div>
      {MovieList.map((Serie, index) => (
        <Card
          key={index}
          style={{
            width: "18rem",
            left: "50%",
            width: "400px",
            height: "auto",
          }}
        >
          <Card.Img variant="top" src={Serie.Cover} />
          <Card.Body>
            <Card.Title>{Serie.MovieName}</Card.Title>
            <Card.Text>{Serie.Description}</Card.Text>

            <Rating
              count={5}
              value={Serie.valueStars}
              size={24}
              activeColor="#ffd700"
              inactiveColor="#ddd"
              edit={false}
            />

            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default SerieCard;
