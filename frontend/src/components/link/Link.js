import { Link } from "react-router-dom";
import "./link.scss";

const LinkItem = ({ link, text, onClick, btn }) => {
  return (
    <span className={`link ${btn && "btn"}`} onClick={onClick ? onClick : null}>
      <Link to={link} data-name={text} className="link__item">
        {text}
      </Link>
    </span>
  );
};

export default LinkItem;
