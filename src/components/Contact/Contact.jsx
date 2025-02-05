import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "add69bdc-716b-4d64-9684-b7133f5bedc9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us a Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Have questions or need assistance? <strong>Kadir Technologies</strong>{" "}
          is here to help! Whether you&#39;re looking for{" "}
          <strong>
            IT solutions, CRM/ERP services, cybersecurity expertise, or details
            about our Maxe app
          </strong>
          , our team is ready to assist you. Reach out to us, and we’ll get back
          to you as soon as possible.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            contact@kadir.ma
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +212 679 834 100
          </li>
          <li>
            <img src={location_icon} alt="" />
            LOT 10, Jadid 5, Hay Iziki, Marrakech, <br />
             40000, Morocco
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
