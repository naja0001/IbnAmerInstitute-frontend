import Navbar from "../../navbar/NavbarViews";
import ijazah1 from "../../../Assets/Images/ijazah1.jpg";
import ijazah2 from "../../../Assets/Images/ijazah2.jpeg";
import ijazah3 from "../../../Assets/Images/ijazah3.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../../Assets/styles/styles.css";
import "./courses.css";
import Footer from "../../footer/Footer";
import Reviews from "../../reviews/Reviews";
import Loader from "../../loader/Loader";

const Ijazah = () => {
  return (
    <>
      <Loader />
      <div>
        <header className="header1">
          <Navbar />

          <div className="text-box1">
            <h1>Ijazah</h1>
            <p>
              `Vi tilbyder kurser, der henvender sig til alle aldre og
              niveauer.`
            </p>
          </div>
        </header>

        <div>
          <section className="info">
            <h1>Linjen for stadfæstelse og forskønnelse af det memoreret</h1>
            <div className="info_body">
              <div className="info_ijazah" id="info_ijazah2">
                <div className="info-ijazah-content">
                  <h4>Færdiggørelse af quran</h4>
                  <p>
                    Eleven der har færdiggjort memoreringen af Koranen skal læse
                    hele Koranen for underviseren adskillige gange, så det
                    memoreret bliver stadfæstet i hukommelsen. Når eleven har
                    reciteret hele Koranen for underviseren adskillige gange,
                    vil eleven nu forskønne recitationen med underviseren, hvor
                    recitationen rettes og i henhold til de velkendte
                    recitationsregler og metoder. Ijazah-linjen
                  </p>
                </div>
                <img className="info_image" src={ijazah1} alt="ijazah1" />
              </div>
              <div className="info_ijazah">
                <img className="info_image" src={ijazah2} alt="ijazah2" />
                <div className="info-ijazah-content">
                  <h4>Bevis fra underviseren</h4>

                  <p>
                    Ijazah er et anerkendt bevis fra underviseren, at eleven har
                    opnået et specialiseret niveau indenfor den skole og metode
                    af recitation. Der gives derved et bevis og tilladelse til
                    at recitere og undervise i det der er blevet lært af
                    underviseren.
                  </p>
                </div>
              </div>
              <div className="info_ijazah">
                <div className="info-ijazah-content">
                  <h4>Bevis linket til profeten SAW</h4>
                  <p>
                    Denne ijazah (bevis) er et bevis hvor underviseren linker
                    eleven med profeten saw og derved er en del af en anerkendt
                    kæde der går tilbage til profeten Muhammad, I denne
                    specialiseret linje, skal eleven recitere hele Koranen, fra
                    start til slut, udenad, for underviseren. Desuden skal
                    eleven have dybt kendskab til videnskaber der tillæres i
                    forløbet.
                  </p>
                </div>
                <img className="info_image" src={ijazah3} alt="ijazah3" />
              </div>
            </div>
            <p id="ijazah-text">
              <b>Disse videnskaber er blandt andet:</b>
            </p>
          </section>

          <section className="ijazah">
            <div className="ijazah-body">
              <ul className="ijazah-sprite">
                <div className="ijazah-content">
                  <li>Tajwid</li>
                  <li>Mutashabihaat</li>
                  <li>Versioner om den pågældende riwayah</li>
                  <li>Viden indenfor start og slut recitationen</li>
                  <li>Magtu&apos; og mawsool</li>
                </div>
                <div className="ijazah-content">
                  <li>Videnskaben om den Osmanniske skrift</li>
                  <li>Fawasil og Dabt</li>
                  <li>Lata&apos;if&apos;ala hamish al-tilawah</li>
                  <li>
                    Subtile forskønnende recitationsvidenskaber (Nabr,
                    ikhtilaas, al-idkhaal, al-tamteet og al-tadh&apos;eef)
                  </li>
                </div>
              </ul>
            </div>
          </section>
        </div>

        <Reviews />
        <Footer />
      </div>
    </>
  );
};

export default Ijazah;
