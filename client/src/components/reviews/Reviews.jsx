import reviewer1 from "../.././Assets/Images/reviewer1.png";
import reviewer2 from "../.././Assets/Images/reviewer2.png";
import reviewer3 from "../.././Assets/Images/reviewer3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const Reviews = () => {
  return (
    <div className="testimonial-area">
      <div className="courses_container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-header text-center">
              <h4>Anmeldelser</h4>
              <h2>Kommentar fra eleverne</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat at animi unde, et, obcaecati eius.
              </p>
            </div>
          </div>
          <div className="col-sm-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="icon-area">
                    <i className="bi bi-chat-dots"></i>
                  </div>
                  <div className="content text-center">
                    <div className="person">
                      <img src={reviewer1} alt="" />
                    </div>
                    <h5>Mohammed Abdullahi</h5>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    <p>
                      Jeg har haft en utrolig positiv oplevelse med Ibn
                      Amira-instituttet. Underviserne er dygtige og dedikerede,
                      og undervisningen i Quran og Tajweed er både omfattende og
                      forståelig. Jeg har virkelig følt, at min forståelse af
                      Quran og min recitationsteknik er forbedret betydeligt.
                      Institutets pædagogiske tilgang er struktureret, og de
                      skaber en støttende læringsmiljø. Jeg vil stærkt anbefale
                      dette institut til alle, der søger en solid og autentisk
                      uddannelse inden for Quran og Tajweed.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="icon-area">
                    <i className="bi bi-chat-dots"></i>
                  </div>
                  <div className="content text-center">
                    <div className="person">
                      <img src={reviewer2} alt="" />
                    </div>
                    <h5>Mariam Salad</h5>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    <p>
                      Jeg har været en del af Ibn Amira-instituttet i flere
                      måneder nu, og jeg er imponeret over det professionelle
                      niveau af undervisningen. Underviserne er dygtige og har
                      en unik evne til at formidle komplekse koncepter på en
                      letforståelig måde. Hvad der virkelig skiller dette
                      institut ud, er den personlige opmærksomhed, som hver
                      studerende modtager. Underviserne er altid tilgængelige
                      for at besvare spørgsmål og give ekstra støtte efter
                      behov. Det har virkelig hjulpet mig med at fordybe mig i
                      mine studier og styrke min forbindelse til Quran.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="icon-area">
                    <i className="bi bi-chat-dots"></i>
                  </div>
                  <div className="content text-center">
                    <div className="person">
                      <img src={reviewer3} alt="" />
                    </div>
                    <h5>Fatima Said</h5>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <p>
                      At deltage i Ibn Amira-instituttet har været en
                      livsændrende oplevelse for mig. Jeg har ikke kun lært
                      Quran og Tajweed på en dybere måde, men jeg har også
                      udviklet en dybere forståelse for islamske principper og
                      etik. Atmosfæren på instituttet er præget af respekt,
                      ydmyghed og opmuntring. Jeg føler virkelig, at jeg er en
                      del af en støttende samfund, der stræber efter personlig
                      og åndelig vækst. Hvis du leder efter mere end bare en
                      undervisningsoplevelse, men også en mulighed for personlig
                      transformation, så er Ibn Amira-instituttet det rette
                      sted.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
