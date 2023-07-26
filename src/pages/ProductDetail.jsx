// npm
import { useLocation, useNavigate } from "react-router-dom";
import SubHero from "../components/SubHero";

export default function ProductDetail() {
  // properties
  const navigate = useNavigate();
  const location = useLocation();
  const { thumbnail, subTitle, info, recipe, price } = location.state;
  return (
    <section className="product">
      <SubHero img={thumbnail} classStyle="hero__img--small" />
      <div className="product__content">
        <h1 className="heading-title">
          {subTitle} <span>:{price}</span>
        </h1>
        <p>{info}</p>
        <p>{recipe}</p>
      </div>
      <button onClick={() => navigate(-1)} className="btn">
        go back
      </button>
    </section>
  );
}
