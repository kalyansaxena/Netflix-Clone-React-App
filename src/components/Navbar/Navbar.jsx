import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix-logo"
          />
          <a href="#homepage" className="nav-link">
            <span>Homepage</span>
          </a>
          <a href="#NetflixOriginals" className="nav-link">
            <span>Netflix Originals</span>
          </a>
          <a href="#TrendingNow" className="nav-link">
            <span>Trending Now</span>
          </a>
          <a href="#TopRated" className="nav-link">
            <span>Top Rated</span>
          </a>
        </div>
        <div className="right">
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
