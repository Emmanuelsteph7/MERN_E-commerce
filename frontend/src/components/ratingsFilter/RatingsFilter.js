import { BsFillStarFill } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import "./ratingsFilter.scss";

const RatingsFilter = ({ ratingsFunc, value }) => {
  const handleStars = () => {
    let ratings = document.querySelector(".ratingsFilter");
    let allStars = ratings.querySelectorAll(".ratingsFilter__star");

    for (let i = 0; i < allStars.length; i++) {
      allStars[i].addEventListener("click", () => {
        ratingsFunc(i);

        allStars.forEach((star) => {
          star.classList.remove("fill");
          star.classList.add("noFill");
        });
      });

      if (value) {
        let indexValue = value;

        if (i <= indexValue) {
          allStars[i].classList.remove("noFill");
          allStars[i].classList.add("fill");
        }
      }
    }
  };

  return (
    <div className="ratingsFilter">
      <BiRefresh className="ratingsFilter__star noFill reset" />
      <BsFillStarFill
        onClick={handleStars}
        className="ratingsFilter__star noFill"
      />
      <BsFillStarFill
        onClick={handleStars}
        className="ratingsFilter__star noFill"
      />
      <BsFillStarFill
        onClick={handleStars}
        className="ratingsFilter__star noFill"
      />
      <BsFillStarFill
        onClick={handleStars}
        className="ratingsFilter__star noFill"
      />
      <BsFillStarFill
        onClick={handleStars}
        className="ratingsFilter__star noFill"
      />
    </div>
  );
};

export default RatingsFilter;
