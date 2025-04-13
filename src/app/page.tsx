import Navbar from "./components/Navbar";
import Beranda from ".//components/Beranda";
import Logo from "./components/Logo";
import Heading from "./components/Heading";
import Table from "./components/Table";
import Proposal from "./components/Proposal";
import Case from "./components/Case";
import Leadingpage from "./components/Leadingpage";
import Working from "./components/Working";
import Testimonial from "./components/Testimonial";
import TestimonialSlider from "./components/TestimonialSlider";
import ContactUs from "./components/ContactUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Accor from "./components/Accor";

export default function Home() {
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
