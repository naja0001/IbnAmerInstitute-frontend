import Navbar from "../../navbar/NavbarViews"; // Import the Navbar component
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../../Assets/styles/styles.css";
//import "./kurser.css";
import Footer from "../../footer/Footer"; // Import the Navbar component
import Reviews from "../../reviews/Reviews"; // Import the Navbar component
import Loader from "../../loader/Loader";
import "./elever.css";

const Elever = () => {
  return (
    <>
      <Loader />
      <div>
        <header className="header1">
          <Navbar />
          <div className="text-box1">
            <h1>Elever</h1>
            <p>
              `Vi tilbyder kurser, der henvender sig til alle aldre og
              niveauer.`
            </p>
          </div>
        </header>
        <Reviews />
        <Footer />
      </div>
    </>
  );
};

export default Elever;
