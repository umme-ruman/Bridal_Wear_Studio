import "./Home.css";
import hero from "../../assets/images/hero.png";
import bridalVideo from "../../assets/videos/bridal-video.mp4";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">
          <h1>Your Dream Bridal Look</h1>

          <p>
            Luxury bridal makeup and styling
            crafted for your special day.
          </p>

          <button>Book Appointment</button>
        </div>
        <div className="hero-image"> <img src={hero} alt="Bridal Hero" /> </div>

      </section>

      {/* Video Section */}

      <section className="video-section">

        <div className="video-content">
          <h2>Behind The Bridal Magic</h2>

          <p>
            Experience our bridal transformations,
            styling sessions, and memorable moments.
          </p>
        </div>

        <video
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={bridalVideo}
            type="video/mp4"
          />
        </video>

      </section>

    </>
  );
}

export default Home;