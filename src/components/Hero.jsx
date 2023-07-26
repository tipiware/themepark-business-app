// files
import img from "../assets/images/bull.png";

export default function Hero({ ImgRoute }) {
  return (
    <section className="hero">
      <div className={`hero__img ${ImgRoute}`} />
      <img src={img} alt="logo" className="hero__logo" />
    </section>
  );
}
