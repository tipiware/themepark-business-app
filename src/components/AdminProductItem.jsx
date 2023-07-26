// npm
import { useParams } from "react-router-dom";

// files
import OpenIcon from "./OpenIcon";
import TrashIcon from "./TrashIcon";

export default function AdminProductItem({ item }) {
  // properties
  const { subTitle, thumbnail, id } = item;
  const { title } = useParams();

  const path = `menu/categories/content/${title}/content`;
  const imgPath = `assets/products/image-${subTitle}.png`;

  return (
    <div className="card--item">
      <img src={thumbnail} alt={subTitle} />
      <h2>{subTitle}</h2>
      <div className="card--item__links">
        <OpenIcon item={item} />
        <TrashIcon id={id} path={path} imgPath={imgPath} />
      </div>
    </div>
  );
}
