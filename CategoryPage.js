import React from "react";
import ProductRow from "./ProductRow";

function CategoryPage({ title, category }) {
  return (
    <div className="container-fluid mt-3">
      <ProductRow
        title={title}
        category={category}
      />
    </div>
  );
}

export default CategoryPage;