import "./Footer.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const handleSocialClick = (type) => {
    if (type === "linkedin") {
      window.open("https://www.linkedin.com/in/kalyan-saxena/", "_blank");
    } else if (type === "github") {
      window.open("https://github.com/kalyansaxena", "_blank");
    } else if (type === "instagram") {
      window.open("https://www.instagram.com/kalyan_saxena/", "_blank");
    } else if (type === "portfolio") {
      window.open("https://kalyan-saxena-mutyala.herokuapp.com/", "_blank");
    }
  };
  return (
    <div className="footer">
      <div className="copyright">
        Netflix Clone React App &#169; {date.getFullYear()} by{" "}
        <b onClick={() => handleSocialClick("portfolio")}>
          Kalyan Saxena Mutyala
        </b>
      </div>
      <div className="disclaimer">
        Netflix Clone React App was created with the intention of learning
        purpose and to showcase in portfolio
      </div>
      <div className="social-container">
        <div className="social-icon">
          <FaLinkedin onClick={() => handleSocialClick("linkedin")} />
        </div>
        <div className="social-icon">
          <FaGithub onClick={() => handleSocialClick("github")} />
        </div>
        <div className="social-icon">
          <FaInstagram onClick={() => handleSocialClick("instagram")} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
