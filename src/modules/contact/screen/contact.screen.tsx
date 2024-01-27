// Layouts
import DefaultLayout from "../../../layouts/default";

// Sections
import ContactSection from "../../../sections/contact/ContactSection";


function ContactScreen() {

  return (
    <div className="App">
      <DefaultLayout>
        
        {/* <!-- Best Result section --> */}
        <ContactSection/>

      </DefaultLayout>
    </div>
  );
}

export default ContactScreen;