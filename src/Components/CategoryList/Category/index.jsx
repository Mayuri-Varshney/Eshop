import { useState } from "react";

const Category = (props) => {
  const { id, name, image } = props.data;
  return (
    <div class="col-sm-3">
      <div class="card">
        <img src={image} alt="" className="card-top-image" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>

          <a href="#" class="btn btn-primary">
            Select
          </a>
        </div>
      </div>
    </div>
  );
};

export default Category;
