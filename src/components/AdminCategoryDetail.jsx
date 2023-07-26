export default function AdminCategoryDetail({ item }) {
  // properties
  const { title, subTitle, info, price, recipe } = item;

  return (
    <section className="admin-detail">
      {title && <h2 className="admin-title">Title: {title}</h2>}
      {subTitle && (
        <h2 className="admin-title">
          Title: {subTitle} - ${price}
        </h2>
      )}
      <p>Info: {info}</p>
      {recipe && <p>Recipe: {recipe}</p>}
    </section>
  );
}
