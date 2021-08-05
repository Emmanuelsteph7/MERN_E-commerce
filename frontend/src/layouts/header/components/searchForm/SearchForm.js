import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./searchForm.scss";

const SearchForm = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <form className="searchForm" onSubmit={(e) => handleSubmit(e)}>
      <div className="searchForm__formGroup">
        <input
          placeholder="Enter Product Name"
          className="searchForm__formGroupInput"
          type="text"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
        />
      </div>
      <div className="searchForm__formSubmit">
        <button className="searchForm__formSubmitBtn" type="submit">
          <FiSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
