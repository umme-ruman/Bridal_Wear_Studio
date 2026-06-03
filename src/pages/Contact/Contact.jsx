import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <h2>Contact Us</h2>

      <form>

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <textarea
          rows="5"
          placeholder="Message"
        ></textarea>

        <button>
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;