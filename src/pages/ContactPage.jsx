// Components
import ContactForm from "../components/ContactForm/ContactForm";

function ContactPage() {
  window.sessionStorage.removeItem("userData");
  return (
    <>
      <h1>Contact EducAid </h1>
      <ContactForm />
    </>
  );
}

export default ContactPage;
