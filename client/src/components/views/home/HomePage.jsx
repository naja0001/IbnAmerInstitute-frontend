import { Link } from "react-router-dom";
import Navbar from "../../navbar/NavbarHomePage";
import Footer from "../../footer/Footer";
import Courses from "../courses/Courses";
import logo from "../../../Assets/Images/logo.png";
import background2 from "../../../Assets/Images/background2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faUser } from "@fortawesome/free-solid-svg-icons";
import { IconContext } from "react-icons";
import "../../../Assets/styles/styles.css";
import "../../navbar/navbar.css";
import "../courses/courses.css";

const HomePage = () => {
  return (
    <>
      <div>
        <header className="header">
          <IconContext.Provider value={{ color: "#fff" }}>
            <Navbar />
          </IconContext.Provider>

          <div className="text-box">
            <img src={background2} alt="background2" />
            <p>
              `De bedste blandt jer muslimer er dem, der lærer Koranen og
              underviser i den.`
            </p>
            <Link to="/contactUs" className="btn1 ">
              Tilmeld dig en introdag
            </Link>
          </div>
          <div className="jump-arrow">
            <span></span>
            <span></span>
          </div>
        </header>

        <section className="about-us">
          <div className="about-img">
            <img src="/Images/tajweed1.jpg" alt="" />
          </div>
          <div className="text">
            <h1>
              Hvem er Ibn Amer Institute?
              <img src={logo} alt="Logo" />
            </h1>
            <hr />
            <p>
              Vi er en uddannelsesinstitution der specialiserer sig udenfor
              <p>recitationsstile qira&apos;at og koranens videnskaber.</p>
              <br />
              Vi specialiserer os også indenfor udenadslære af koranen, og
              arbejder for at sprede koranens videnskaber vidt og bredt. <br />
              Ibn Amer Institute mellem eleven og underviser er i fokus.
            </p>
          </div>
        </section>

        <section className="count" id="counters">
          <div className="box-container" id="counter-wrapper">
            <div className="box">
              <FontAwesomeIcon icon={faGraduationCap} />
              <div className="label2">
                <h3>20+</h3>
                <p>Hufadhs</p>
              </div>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faUser} />
              <div className="label2">
                <h3>100+</h3>
                <p>elever</p>
              </div>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faUser} />
              <div className="label2">
                <h3>30+</h3>
                <p>Ijazah</p>
              </div>
            </div>
          </div>
        </section>
        <Courses />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
