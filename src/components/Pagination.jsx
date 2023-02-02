import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/pagination.css";
import Page from "./Page";
import PageBtn from "./subComponent/PageBtn";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(100);
  return (
    <div className="pagination">
      <Link to={`/page/${1}`} onClick={() => setCurrentPage(1)}>
        <PageBtn btnName={1} btnClass={"inActive"} />
      </Link>

      <Link
        to={`/page/${currentPage - 3}`}
        onClick={() => setCurrentPage(currentPage - 3)}
      >
        <PageBtn btnName={"Өмнөх"} btnClass={"inActive"} />
      </Link>

      <Link
        to={`/page/${currentPage - 2}`}
        onClick={() => setCurrentPage(currentPage - 2)}
      >
        <PageBtn btnName={currentPage - 2} btnClass={"inActive"} />
      </Link>
      <Link
        to={`/page/${currentPage - 1}`}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <PageBtn btnName={currentPage - 1} btnClass={"inActive"} />
      </Link>

      <Link to={`/page/${currentPage}`}>
        <PageBtn btnName={currentPage} btnClass={"active"} />
      </Link>

      <Link
        to={`/page/${currentPage + 1}`}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <PageBtn btnName={currentPage + 1} btnClass={"inActive"} />
      </Link>
      <Link
        to={`/page/${currentPage + 2}`}
        onClick={() => setCurrentPage(currentPage + 2)}
      >
        <PageBtn btnName={currentPage + 2} btnClass={"inActive"} />
      </Link>
    </div>
  );
}
