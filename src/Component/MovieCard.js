import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MovieList from "./MovieList";
import "./Card.css";
import Rating from "react-rating-stars-component";
import SerieFilter from "./SerieFilter";
import AddMovieForm from "./NewMovie";

function SerieCard() {
  const [filter, setFilter] = useState({ title: "", rate: "" });
  const [valueStars, setValueStars] = useState(0);
  const [movies, setMovies] = useState(MovieList);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const handleRatingChange = (newRating) => {
    setValueStars(newRating);
  };

  useEffect(() => {
    alert("AlreadyRated  \n Thanks for your Rating");
  }, [valueStars]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredSeries = movies.filter((movie) => {
    return (
      movie.MovieName.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rate === "" || movie.valueStars.toString() === filter.rate)
    );
  });

  return (
    <div className="bg-black">
      <SerieFilter onFilterChange={handleFilterChange} />

      {filteredSeries.map((Serie) => (
        <Card
          key={Serie.id}
          style={{
            width: "300px",
            height: "auto",
            margin: "auto",
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
              onChange={handleRatingChange}
            />

            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
      <AddMovieForm onAddMovie={handleAddMovie} />
    </div>
  );
}

export default SerieCard;
