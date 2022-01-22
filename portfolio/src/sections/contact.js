import TextInput from "../components/textInput";
import Button from "../components/button";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [noNameError, setNoNameError] = useState(false);
  const [noEmailError, setNoEmailError] = useState(false);
  const [noMessageError, setNoMessageError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    var error = false
    if (contact.name === "") {
      setNoNameError(true);
      error  = true
    }

    if (contact.email === "") {
      setNoEmailError(true);
      error = true
    }

    if (contact.message === "") {
      setNoMessageError(true);
      error = true
    }

    if (error) {
      return;
    }

    emailjs.init("user_gwVTLVUUXVJK1ZeSbKAbA");

    emailjs
      .send("service_dkc114f", "template_jrz5w7j", contact)
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="contact-page-holder" id="contact-page-holder">
      <div className="contact-content">
        <div className="contact-title">Contact</div>
        <form>
          <TextInput
            title="Name"
            type="text"
            setValue={(e) => {
              setContact({ ...contact, name: e.target.value });
              setNoNameError(false);
            }}
            error={noNameError ? "You must include a name." : ""}
          />
          <TextInput
            title="Email"
            type="email"
            setValue={(e) => {
              setContact({ ...contact, email: e.target.value });
              setNoEmailError(false);
            }}
            error={noEmailError ? "You must include an email." : ""}
          />
          <TextInput
            title="Message"
            type="textarea"
            setValue={(e) => {
              setContact({ ...contact, message: e.target.value });
              setNoMessageError(false);
            }}
            error={noMessageError ? "You must include a message" : ""}
          />
          <div className="contact-btn-holder" onClick={sendEmail}>
            <Button text="Send Message" className="send-button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
