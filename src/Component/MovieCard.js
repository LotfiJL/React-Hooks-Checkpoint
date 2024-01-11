import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MovieList from "./MovieList";
import "./Card.css";
import Rating from "react-rating-stars-component";
import SerieFilter from "./SerieFilter";

function SerieCard() {
  const [filter, setFilter] = useState({ title: "", rate: "" });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredSeries = MovieList.filter((movie) => {
    return (
      movie.MovieName.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rate === "" || movie.valueStars.toString() === filter.rate)
    );
  });

  return (
    <div>
      <SerieFilter onFilterChange={handleFilterChange} />
      {filteredSeries.map((Serie) => (
        <Card
          key={Serie.id}
          style={{
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
