import { useState } from "react";

const Product = (props) => {
  const { id, title, price, category, description, images } = props.data;
  return (
    <div class="col-sm-3">
      <div class="card">
        <img src={images} alt="" className="card-top-image" />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <h5 class="card-title">{price}</h5>
          {/* <h5 class="card-title">{category?.name}</h5> */}

          <a href="#" class="btn btn-primary">
            Select
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
