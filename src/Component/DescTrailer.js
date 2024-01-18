import React from "react";
import MovieList from "./MovieList";
import { useNavigate, useParams } from "react-router-dom";
const DescTrailer = () => {
  const { movieN } = useParams();
  const Movie = MovieList.find((m) => m.MovieName === movieN);
  const Navigate = useNavigate();
  if (Movie) {
    return (
      <div className="bg-light">
        <h4>About :</h4>
        <p id="Resume"> {Movie.ViewMore}</p>
        <h4>Trailer :</h4>
        <iframe
          width="935"
          height="526"
          src={Movie.Trailer}
          title="La casa de papel | Tráiler de la serie | Netflix"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <br></br>
        <button
          onClick={() => Navigate("/")}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          GO TO MENU
        </button>
      </div>
    );
  } else {
    return <h1>Error</h1>;
  }
};

export default DescTrailer;
