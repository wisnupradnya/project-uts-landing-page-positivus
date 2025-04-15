import Navbar from "../Organism/Navbar";
import Beranda from "../Organism/Beranda";
import Logo from "../Organism/Logo";
import Heading from "../Organism/Heading";
import Table from "../Organism/Table";
import Proposal from "../Organism/Proposal";
import Case from "../Organism/Case";
import Leadingpage from "../Organism/Leadingpage";
import Working from "../Organism/Working";
import Testimonial from "../Organism/Testimonial";
import TestimonialSlider from "../Organism/TestimonialSlider";
import ContactUs from "../Organism/ContactUs";
import ContactForm from "../Organism/ContactForm";
import Footer from "../Organism/Footer";
import Accor from "../Organism/Accor";

export default function Pages() {
  return (
    <>
      <Navbar />
      <Beranda />
      <Logo />
      <Heading />
      <Table />
      <Proposal />
      <Case />
      <Leadingpage />
      <Working />
      <Accor />
      <Testimonial />
      <main className="px-20 py-10">
        <TestimonialSlider />
      </main>
      <ContactUs />
      <main className="min-h-screen flex items-center justify-center px-20 py-10">
        <ContactForm />
      </main>

      <main>
        <Footer />
      </main>
    </>
  );
}
