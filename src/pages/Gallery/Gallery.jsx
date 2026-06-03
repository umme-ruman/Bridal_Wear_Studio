import "./Gallery.css";

import img1 from "../../assets/images/g1.jpg";
import img2 from "../../assets/images/g2.jpg";
import img3 from "../../assets/images/g3.jpg";
import img4 from "../../assets/images/g4.jpg";

function Gallery() {
  return (
    <section className="gallery">

      <h2>Our Bridal Gallery</h2>

      <div className="gallery-grid">

        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />

      </div>

    </section>
  );
}

export default Gallery;