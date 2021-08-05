import { Link } from "react-router-dom";
import "./link.scss";

const LinkItem = ({ link, text }) => {
  return (
    <span className="link">
      <Link to={link} data-name={text} className="link__item">
        {text}
      </Link>
    </span>
  );
};

export default LinkItem;
