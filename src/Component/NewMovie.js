import React, { useState } from "react";

function AddMovieForm({ onAddMovie }) {
  const [movieName, setMovieName] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [description, setDescription] = useState("");
  const [valueStars, setValueStars] = useState(0);

  const handleAddMovie = () => {
    const newMovie = {
      MovieName: movieName,
      Cover: coverUrl,
      Description: description,
      valueStars: valueStars,
      id: Math.floor(Math.random() * 1000),
    };
    onAddMovie(newMovie);

    setMovieName("");
    setCoverUrl("");
    setDescription("");
    setValueStars(0);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Movie Name"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Movie URL"
        value={coverUrl}
        onChange={(e) => setCoverUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        value={valueStars}
        onChange={(e) => setValueStars(e.target.value)}
      />

      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
}

export default AddMovieForm;
