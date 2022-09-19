import React, { useState } from "react";
import "./Products.css";

const Products = () => {
  const [product, setProduct] = useState("");
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            UI/UX
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            Web development
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            Logo Design
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            Social Media Marketing
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            AI
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            Data Science
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Products;
