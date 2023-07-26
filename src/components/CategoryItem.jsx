// npm
import { Link } from "react-router-dom";

export default function CategoryItem({ item }) {
  // properties
  const { title, body, img } = item;
  return (
    <div className="category">
      <div className="category__image">
        <img src={require(`../assets/images/${img}`)} alt={title} />
      </div>
      <div className="category__body">
        <h2 className="heading-title">{title}</h2>
        <div className="category__body--text">
          <p>{body}</p>
        </div>
        <Link to={`category/${title}`}>
          <button className="btn">see more</button>
        </Link>
      </div>
    </div>
  );
}
