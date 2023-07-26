// files
import useCollection from "../hooks/useCollection";
import FeatureItem from "../components/FeatureItem";
import Hero from "../components/Hero";

export default function Menu() {
  // properties
  const { documents } = useCollection("menu/categories/content");

  // components
  const MenuList =
    documents &&
    documents.map((item) => <FeatureItem key={item.id} item={item} />);

  return (
    <main>
      <Hero ImgRoute="hero__menu" />
      <section className="menu-list">{MenuList}</section>
    </main>
  );
}
