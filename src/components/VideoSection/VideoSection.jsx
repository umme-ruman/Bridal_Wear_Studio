import "./VideoSection.css";
import bridalVideo from "../../assets/videos/bridal-video.mp4";
function VideoSection() {
  return (
    <section className="video-section">
      <h2>Behind The Glamour</h2>

      <video autoPlay muted loop controls>
        <source src={bridalVideo} type="video/mp4" />
      </video>
    </section>
  );
}

export default VideoSection;