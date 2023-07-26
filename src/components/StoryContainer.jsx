// npm
import { useNavigate } from "react-router-dom";

export default function StoryContainer({ story }) {
  // properties
  const { title, text, btn, imgPath } = story;
  const navigate = useNavigate();

  // components
  const TextContent =
    text && text.map((txt, index) => <p key={index}>{txt}</p>);

  return (
    <div className="story">
      <div className="story__body">
        <h2 className="heading-title">{title}</h2>
        <div className="story__body--text">{TextContent}</div>
        {btn && (
          <button className="btn" onClick={() => navigate(`/${imgPath}`)}>
            {btn}
          </button>
        )}
      </div>
      <div className={`story__image ${imgPath}`} />
    </div>
  );
}
