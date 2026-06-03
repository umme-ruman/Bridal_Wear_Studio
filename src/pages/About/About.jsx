import "./About.css";
import aboutImg from "../../assets/images/about.png";
function About() {
  return (
    <section className="about">
      <div className="about-image">
        <img src={aboutImg} alt="Bridal Studio" />
      </div>

      <div className="about-content">
        <span>About Us</span>

        <h2>
          Creating Timeless Bridal Beauty
        </h2>

        <p>
          At Rume Bridal Studio, we believe every bride deserves
          to feel confident, elegant, and beautiful on her special day.
          Our expert artists specialize in bridal makeup, hair styling,
          saree draping, and personalized beauty transformations.
        </p>

        <p>
          With years of experience and premium products,
          we ensure a flawless and long-lasting bridal look.
        </p>
      </div>
    </section>
  );
}

export default About;