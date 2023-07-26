// files
import ContactForm from "../components/forms/ContactForm";
import SubHero from "../components/SubHero";
import img from "../assets/images/fun1.jpg";
import Map from "../components/Map";

export default function Contact() {
  // properties
  return (
    <section>
      <SubHero img={img} classStyle="hero__img" />
      <div>
        <ContactForm />
        <Map />
      </div>
    </section>
  );
}
