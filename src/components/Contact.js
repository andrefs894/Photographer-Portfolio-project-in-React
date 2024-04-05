import '../css/Contact.css';

function Contact() {
    return (
      <div className="contact-container" id="contact">
        <div>
          <h1>Contact</h1>
          <hr />
        </div>
        <form noValidate>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" />
          <label htmlFor="message">Message:</label>
          <textarea type="text" id="enquiry" />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }

  export default Contact;