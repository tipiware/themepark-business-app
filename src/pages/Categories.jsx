// npm
import { useParams, useLocation } from "react-router-dom";

// files
import useCollection from "../hooks/useCollection";
import FeatureItem from "../components/FeatureItem";
import SubHero from "../components/SubHero";

export default function Categories() {
  //properties
  const location = useLocation();
  const { thumbnail } = location.state;
  const { id } = useParams();
  const { documents } = useCollection(`menu/categories/content/${id}/content`);

  // componnets
  const ProductList =
    documents &&
    documents.map((item) => <FeatureItem key={item.id} item={item} />);

  const NoItems = documents && documents.length === 0 && <p>This is our product</p>;

  return (
    <section>
      <SubHero img={thumbnail} classStyle="hero__img" />
      {NoItems}
      <section>{ProductList}</section>
    </section>
  );
}
