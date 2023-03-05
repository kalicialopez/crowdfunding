

// Components
import ContactForm from "../components/ContactForm/ContactForm";


function ContactPage () {
    window.sessionStorage.removeItem("userData");
    return (
        <>
            <h1>If you have any questions or would like more information about EducAid, please do not hesitate to get in touch </h1>
            <ContactForm />
        </>
    );
}

export default ContactPage;