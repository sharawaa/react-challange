import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pagination.css";

import PageBtn from "./subComponent/PageBtn";
const pageNumber = 200;

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(10);
  return (
    <div className="pagination">
      <>
        {currentPage > 3 && (
          <Link to={`/page/${1}`} onClick={() => setCurrentPage(1)}>
            <PageBtn btnName={1} btnClass={"inActive"} />
          </Link>
        )}

        {currentPage > 1 && (
          <Link
            to={`/page/${currentPage - 1}`}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <PageBtn btnName={"Өмнөх"} btnClass={"inActive"} />
          </Link>
        )}

        {currentPage >= 3 && (
          <Link
            to={`/page/${currentPage - 2}`}
            onClick={() => setCurrentPage(currentPage - 2)}
          >
            <PageBtn btnName={currentPage - 2} btnClass={"inActive"} />
          </Link>
        )}
        {currentPage >= 2 && (
          <Link
            to={`/page/${currentPage - 1}`}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <PageBtn btnName={currentPage - 1} btnClass={"inActive"} />
          </Link>
        )}

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
        <Link
          to={`/page/${currentPage + 1}`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <PageBtn btnName={"Дараах"} btnClass={"inActive"} />
        </Link>
        <Link
          to={`/page/${pageNumber}`}
          onClick={() => setCurrentPage(pageNumber)}
        >
          <PageBtn btnClass={"inActive"} btnName={pageNumber} />
        </Link>
      </>
    </div>
  );
}
