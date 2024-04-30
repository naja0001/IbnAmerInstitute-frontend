import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-omos" id="footer-sprite">
          <h4>Om os</h4>
          <p>
            Vi er en uddannelsesinstution der specialisere sig udenfor
            reciitationsstile qiraat og koranens videnskaber.
          </p>
        </div>
        <div className="footer-kontaktos" id="footer-sprite">
          <h4>Kontakt os</h4>
          <ul>
            <li>
              <span>
                <FontAwesomeIcon icon={faMapMarker} />
              </span>
              <p>
                <a href="#">Hørkær 32, 2730 Herlev</a>
              </p>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <p>
                <a href="#">IbnAmer@hotmail.com</a>
              </p>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <p>
                <a href="#">+45 00 00 00 00 </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="footer-menu" id="footer-sprite">
          <h4>Menu</h4>
          <ul>
            <li>
              <Link to="/">HJEM</Link>
            </li>
            <li>
              <Link to="/about-us">OM OS</Link>
            </li>
            <li>
              <Link to="/Udenadslaering">UDENADSLÆRING</Link>
            </li>
            <li>
              <Link to="/tajweed">TAJWEED</Link>
            </li>
            <li>
              <Link to="/Ijazah">IJAZAH</Link>
            </li>
            <li>
              <Link to="/teachers">UNDERVISER</Link>
            </li>
            <li>
              <Link to="/elever">ELEVER</Link>
            </li>
            <li>
              <Link to="/contactUs">KONTAKT OS</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
