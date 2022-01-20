import TextInput from "../components/textInput";
import Button from "../components/button";

const Contact = () => {
  return (
    <div className="contact-page-holder">
      <div className="contact-content">
        <div className="contact-title">Contact</div>
        <form>
          <TextInput title="Name" type="text" />
          <TextInput title="Email" type="email" />
          <TextInput title="Message" type="textarea" />
          <div className="contact-btn-holder">
            <Button text="Send Message" className="send-button"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
