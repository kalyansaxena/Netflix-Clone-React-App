import { useEffect } from "react";
import { useState } from "react";
import "./Row.css";
import axios from "../../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_image_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, id }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (m) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(m?.title || "")
        .then((url) => {
          console.log(url);

          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="row" id={id}>
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            src={`${base_image_url}${movie.poster_path}`}
            alt={movie.title}
            key={movie.id}
            onClick={() => handleClick(movie)}
            className="row__poster"
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
