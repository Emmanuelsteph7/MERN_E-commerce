import { FiSearch } from "react-icons/fi";
import "./searchForm.scss";

const SearchForm = () => {
  return (
    <form className="searchForm">
      <div className="searchForm__formGroup">
        <input
          placeholder="Enter Product Name"
          className="searchForm__formGroupInput"
          type="text"
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
