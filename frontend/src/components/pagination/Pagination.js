import {
  BsChevronRight,
  BsChevronLeft,
  BsChevronDoubleRight,
  BsChevronDoubleLeft,
} from "react-icons/bs";
import "./pagination.scss";

// for how to use this component, check src/layouts/dashboard/projects/allProjects/components/allprojectsSection/AllProjectsSection.js

const Pagination = ({
  currentPage,
  currentPageFunc,
  dataLength,
  postsPerPage,
}) => {
  const pageNumbers = [];

  let highestNumber = Math.ceil(dataLength / postsPerPage);

  for (let i = 1; i <= highestNumber; i++) {
    pageNumbers.push(i);
  }

  const handlePagination = (e, pageNumber) => {
    currentPageFunc(pageNumber);

    let paginationIcons = document.querySelectorAll(".pagination__number");

    paginationIcons.forEach((icon) => {
      icon.classList.remove("active");
    });

    e.target.classList.add("active");
  };

  const nextPagination = () => {
    if (currentPage === highestNumber) {
      return currentPageFunc((current) => current + 0);
    }
    currentPageFunc((current) => current + 1);

    let paginationIcons = document.querySelectorAll(".pagination__number");

    for (let i = 0; i < paginationIcons.length; i++) {
      paginationIcons[i].classList.remove("active");

      if (paginationIcons[i].innerHTML == currentPage + 1) {
        paginationIcons[i].classList.add("active");
      }
    }
  };

  const backPagination = () => {
    if (currentPage === 1) {
      return currentPageFunc((current) => current - 0);
    }
    currentPageFunc((current) => current - 1);

    let paginationIcons = document.querySelectorAll(".pagination__number");

    for (let i = 0; i < paginationIcons.length; i++) {
      paginationIcons[i].classList.remove("active");

      if (paginationIcons[i].innerHTML == currentPage - 1) {
        paginationIcons[i].classList.add("active");
      }
    }
  };

  const startPagination = () => {
    // if (currentPage === 1) {
    //   return currentPageFunc((current) => current - 0);
    // }
    currentPageFunc(1);

    let paginationIcons = document.querySelectorAll(".pagination__number");

    for (let i = 0; i < paginationIcons.length; i++) {
      paginationIcons[i].classList.remove("active");

      if (paginationIcons[i].innerHTML == 1) {
        paginationIcons[i].classList.add("active");
      }
    }
  };

  const endPagination = () => {
    // if (currentPage === 1) {
    //   return currentPageFunc((current) => current - 0);
    // }
    currentPageFunc(highestNumber);

    let paginationIcons = document.querySelectorAll(".pagination__number");

    for (let i = 0; i < paginationIcons.length; i++) {
      paginationIcons[i].classList.remove("active");

      if (paginationIcons[i].innerHTML == highestNumber) {
        paginationIcons[i].classList.add("active");
      }
    }
  };

  return (
    <div className="pagination">
      <div className="pagination__start" onClick={startPagination}>
        <BsChevronDoubleLeft />
      </div>
      <div className="pagination__back" onClick={backPagination}>
        <BsChevronLeft />
      </div>
      {pageNumbers != undefined &&
        pageNumbers.map((number) => {
          return (
            <div
              onClick={(e) => handlePagination(e, number)}
              key={number}
              className={`pagination__number ${
                number === currentPage ? "active" : ""
              } `}
              datanumber={number}
            >
              {number}
            </div>
          );
        })}
      <div className="pagination__next" onClick={nextPagination}>
        <BsChevronRight />
      </div>
      <div className="pagination__end" onClick={endPagination}>
        <BsChevronDoubleRight />
      </div>
    </div>
  );
};

export default Pagination;
