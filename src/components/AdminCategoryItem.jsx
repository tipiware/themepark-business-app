// files
import TrashIcon from "./TrashIcon";
import LinkIcon from "./LinkIcon";
import OpenIcon from "./OpenIcon";

export default function AdminCategoryItem({ item }) {
  // properties
  const { title, thumbnail, id } = item;

  const path = "menu/categories/content";
  const imgPath = `assets/image-${id}.png`;

  return (
    <div className="card--item">
      <img src={thumbnail} alt={title} />
      <h2 className="admin-title">{title}</h2>
      <div className="card--item__links">
        <OpenIcon item={item} />
        <LinkIcon route={`./category/${id}`} />
        <TrashIcon id={id} path={path} imgPath={imgPath} />
      </div>
    </div>
  );
}
