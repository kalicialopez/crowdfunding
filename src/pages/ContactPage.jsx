// Components
import ContactForm from "../components/ContactForm/ContactForm";

function ContactPage() {
  window.sessionStorage.removeItem("userData");
  return (
    <>
      <body className="page-body">
        <h1>Contact EducAid </h1>
        <ContactForm />
      </body>
    </>
  );
}

export default ContactPage;
