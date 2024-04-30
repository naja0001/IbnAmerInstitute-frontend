import Navbar from "../../navbar/NavbarViews";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../../Assets/styles/styles.css";
import "./contactUs.css";
import "../../../Assets/styles/login.css";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../footer/Footer";
import Loader from "../../loader/Loader";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useRef, useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

//import dotenv from "dotenv";
//dotenv.config({ path: "./.env.dev" });

// npm i @emailjs/browser

const ContactUs = () => {
  const form = useRef();
  console.log("Process Environment:", import.meta.env);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    console.log("Public Key:", import.meta.env.REACT_APP_PUBLIC_KEY);
    console.log("Service Key:", import.meta.env.REACT_APP_SERVICE_ID);
    console.log("template Key:", import.meta.env.REACT_APP_TEMPLATE_ID);

    e.preventDefault();

    if (!validatePhoneNumber(phoneNumber)) {
      alert("Please enter a valid phone number.");
      return; // Do not proceed with the email sending if the phone number is not valid
    }

    emailjs
      .sendForm(
        "react_ibn_amir",
        "react_ibnamir_form",
        form.current,
        "f03Rt2SJPKI7SZmfD"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccessMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, [showSuccessMessage]);

  return (
    <>
      <Loader />
      <div>
        <header className="header1">
          <Navbar />
          <div className="text-box1">
            <h1>Kontakt os</h1>
            <p>
              `Vi tilbyder kurser, der henvender sig til alle aldre og
              niveauer.`
            </p>
          </div>
        </header>

        <section className="contact-section">
          <section className="contact-wrapper">
            <section className="tildmeddig">
              <div className="wrapper">
                <form action="" ref={form} onSubmit={sendEmail}>
                  <h1>Tilmeld dig</h1>
                  <div className="input-box">
                    <input
                      type="text"
                      name="user_firstName"
                      placeholder="Navn"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="text"
                      name="user_lastName"
                      placeholder="Efternavn"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <select name="user_kursus" required>
                      <option value="" disabled selected>
                        Vælg et kursus
                      </option>
                      <option value="tajweed">Tajweed</option>
                      <option value="ijazah">Ijazah</option>
                      <option value="Udenadslæring 1">
                        Udenadlæring på 1,5 år
                      </option>
                      <option value="Udenadslæring 2">
                        Udenadlæring på 3 år
                      </option>
                      <option value="Udenadslæring 3">
                        Udenadlæring på 5 år
                      </option>
                    </select>
                  </div>
                  <div className="input-box">
                    <PhoneInput
                      country={"dk"}
                      onlyCountries={["dk"]}
                      value={phoneNumber}
                      onChange={handleChange}
                      inputProps={{
                        required: true,
                      }}
                    />
                    {!valid && <p>Please enter a valid phone number.</p>}
                  </div>

                  <button type="submit" value="send" className="btn1">
                    Tilmeld dig
                  </button>
                  {showSuccessMessage && (
                    <div className="success-message" style={{ color: "green" }}>
                      Email sent successfully!
                    </div>
                  )}
                </form>
              </div>
            </section>
            <div className="contact-info">
              <div>
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span>Phone No.</span>
                <span className="text">1-2392-23928-2</span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span>E-mail</span>
                <span className="text">mail@company.com</span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faMapMarker} />
                </span>
                <span>Address</span>
                <span className="text">
                  2939 Patrick Street, Vicotria TX, United States
                </span>
              </div>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.3888630372194!2d12.432770075764681!3d55.71699399474994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525052c1ca3ea9%3A0xed6ec7555c367122!2zSMO4cmvDpnIgMzIsIDI3MzAgSGVybGV2!5e0!3m2!1sda!2sdk!4v1701907139240!5m2!1sda!2sdk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </section>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
