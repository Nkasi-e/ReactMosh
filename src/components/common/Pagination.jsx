import React from "react";
import lodash from "lodash";

const Pagination = ({ itemsCount, pageSize }) => {
  //   const { itemsCount, pageSize } = props;
  // Calculating the number of pages
  const pagesCount = Math.ceil(itemsCount / pageSize);
  //using lodash to generate an array with this number
  if (pagesCount === 1) return null;
  const pages = lodash.range(1, pagesCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
