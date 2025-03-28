import { useNavigate } from "react-router-dom";
import logo from "./../../assets/images/mav-marketplace.png";
import "./index.scss";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search"); // Navigates to the Search Page
  };

  return (
    <>
      <div className="home-container">
        <div className="text-content">
          <h1>Welcome,</h1>
          <p>Find the best deals with us.</p>
          <button onClick={handleSearchClick} className="search-button">
            Start Now
          </button>
        </div>
        <div className="logo-container-home">
          <img className="logo-home" src={logo} alt="Mav Marketplace Logo" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
