import "./Services.css";

import makeup from "../../assets/images/makeup.jpg";
import saree from "../../assets/images/saree.jpg";
import lehenga from "../../assets/images/lehenga.jpg";
import groom from "../../assets/images/groom.jpg";
import jewellery from "../../assets/images/jewellery.jpg";
import draping from "../../assets/images/draping.png";
import styling from "../../assets/images/styling.jpg";
import prewedding from "../../assets/images/prewedding.png";
function Services() {

  const services = [
    {
      title: "Bridal Makeup",
      image: makeup,
      desc: "Flawless HD bridal makeup for your wedding day."
    },
    {
      title: "Bridal Sarees",
      image: saree,
      desc: "Elegant designer sarees for traditional weddings."
    },
    {
      title: "Bridal Lehengas",
      image: lehenga,
      desc: "Premium bridal lehengas curated for modern brides."
    },
    {
      title: "Groom's Wear",
      image: groom,
      desc: "Stylish sherwanis and groom fashion collections."
    },
    {
      title: "Bridal Jewellery",
      image: jewellery,
      desc: "Luxury jewellery sets to complete your bridal look."
    },
    {
      title: "Saree Draping",
      image: draping,
      desc: "Professional saree draping styles for every occasion."
    },
    {
      title: "Bridal Styling",
      image: styling,
      desc: "Complete styling consultation from head to toe."
    },
    {
      title: "Pre Wedding Photoshoot",
      image: prewedding,
      desc: "Capture beautiful moments with creative and cinematic pre-wedding photography."
    }
  ];

  return (
    <section className="services">

      <div className="services-header">
        <span>Our Services</span>
        <h2>Luxury Bridal Experience</h2>
        <p>
          Everything you need to look stunning on your special day.
        </p>
      </div>

      <div className="service-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-image">
              <img
                src={service.image}
                alt={service.title}
              />
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;