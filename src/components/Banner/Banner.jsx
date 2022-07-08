import { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";

const Banner = ({ fetchUrl }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results[Math.floor(Math.random() * 20)]);
      return request;
    };
    fetchData();
  }, [fetchUrl]);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="banner__description">{movie?.overview}</p>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">Info</button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
