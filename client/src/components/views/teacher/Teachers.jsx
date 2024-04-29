import Navbar from "../../navbar/NavbarViews"; // Import the Navbar component
import teacher from "../../../Assets/Images/teacher.png";
//import "bootstrap-icons/fonst/bootstrap-icons.css";
import "../../../Assets/styles/styles.css";
//import "./kurser.css";
import Footer from "../../footer/Footer"; // Import the Navbar component
import Reviews from "../../reviews/Reviews";
import Loader from "../../loader/Loader";

const teachers = () => {
  return (
    <>
      <Loader />
      <div>
        <header className="header1">
          <Navbar />

          <div className="text-box1">
            <h1>Om os</h1>
            <p>
              `Vi tilbyder kurser, der henvender sig til alle aldre og
              niveauer.`
            </p>
          </div>
        </header>

        <div className="teacher">
          <div className="teacher-left-content">
            <div className="teacher-img opacity-100">
              <img src={teacher} alt="" />
            </div>
            <h2>Sheikh Isran</h2>
            <h3>certificerde underviser</h3>
          </div>
          <div className="teacher-right">
            <h1>Underviser</h1>
            <h2>
              lorem <span> & lorem</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              aspernatur possimus ullam quaerat, laboriosam ex voluptate aliquid
              laborum, obcaecati ratione accusamus! Ea nisi modi dolor nam
              numquam? Temporibus, molestias amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              iure tempora alias laudantium sapiente impedit!
            </p>
          </div>
        </div>

        <Reviews />
        <Footer />
      </div>
    </>
  );
};

export default teachers;
