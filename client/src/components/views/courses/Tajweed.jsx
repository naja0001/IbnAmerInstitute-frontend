import Navbar from "../../navbar/NavbarViews";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../../Assets/styles/styles.css";
import "./courses.css";
import "../students/elever.css";
import Footer from "../../footer/Footer";
import Reviews from "../../reviews/Reviews";
import Loader from "../../loader/Loader";

const Tajweed = () => {
  return (
    <>
      <Loader />
      <div>
        <header className="header1">
          <Navbar />
          <div className="text-box1">
            <h1>Tajweed</h1>
            <p>
              `Vi tilbyder kurser, der henvender sig til alle aldre og
              niveauer.`
            </p>
          </div>
        </header>

        <section className="info">
          <h1>Opnå Tajweed-færdigheder</h1>
          <p>
            Vores Tajweed-kursus er skræddersyet til både søstre og brødre, og
            det giver dig mulighed for at studere Tajweed på en bekvem og
            tilgængelig måde. Uanset om du er nybegynder inden for Tajweed eller
            ønsker at forfine dine eksisterende færdigheder, tilbyder vores
            kurser omfattende og interaktive lektioner, der sikrer en grundig
            uddannelse.
          </p>
          <div className="info_container">
            <div className="info_sprite">
              <h3>Hvad du lærer under Tajweed-kurset</h3>
              <ul>
                <li>Makharij af Huruf, Artikulationspunkter for Bogstaver</li>
                <li>Kendskab til Sifaat.</li>
                <li>Viden og regler for Tajweed</li>
                <li>Anvendelse af Tajweed (Implementering).</li>
                <li>
                  Praktisk træning med læreren, hvor læren vil udtale, og eleven
                  vil gentage efter.
                </li>
              </ul>
            </div>

            <div className="info_sprite" id="info_2">
              <h3>Løft din Quran-recitation til det næste niveau</h3>
              <p>Tilmeld dig nu og oplev fordelene ved at lære Tajweed.</p>
              <a href="/ContactUs" id="course-btn" className="btn">
                Tilmeld dig her
              </a>
            </div>
          </div>
        </section>

        <Reviews />
        <Footer />
      </div>
    </>
  );
};

export default Tajweed;
