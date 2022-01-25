import TextInput from "../components/textInput";
import Button from "../components/button";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

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

    var error = false;
    if (contact.name === "") {
      setNoNameError(true);
      error = true;
    }

    if (contact.email === "") {
      setNoEmailError(true);
      error = true;
    }

    if (contact.message === "") {
      setNoMessageError(true);
      error = true;
    }

    if (error) {
      return;
    }

    emailjs.init("user_gwVTLVUUXVJK1ZeSbKAbA");

    emailjs
      .send("service_dkc114f", "template_jrz5w7j", contact)
      .then(() => {
        toast.success("Thank you! Your message has been sent", {position: toast.POSITION.BOTTOM_RIGHT});
      })
      .catch(() => {
        toast.error("There was an error. Please try again.", {position: toast.POSITION.BOTTOM_RIGHT});
      });

    setContact({
      name: "",
      email: "",
      message: "",
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
            value={contact.name}
            setValue={(e) => {
              setContact({ ...contact, name: e.target.value });
              setNoNameError(false);
            }}
            error={noNameError ? "You must include a name." : ""}
          />
          <TextInput
            title="Email"
            type="email"
            value={contact.email}
            setValue={(e) => {
              setContact({ ...contact, email: e.target.value });
              setNoEmailError(false);
            }}
            error={noEmailError ? "You must include an email." : ""}
          />
          <TextInput
            title="Message"
            type="textarea"
            value={contact.message}
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
