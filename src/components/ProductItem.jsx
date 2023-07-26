export default function ProductItem({ item }) {
  // properties
  const { title, body, img } = item;
  return (
    <div className="product">
      <div className="product">
        <img src={require(`../assets/images/${img}`)} alt={title} />
      </div>
      <div className="product">
        <h2 className="heading-title">{title} : 185 sek</h2>
        <div className="product--text">
          <p>{body}</p>
        </div>
        <button>see more</button>
      </div>
    </div>
  );
}
