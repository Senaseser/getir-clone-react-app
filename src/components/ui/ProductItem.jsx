import React from "react";
import { BiPlus } from "react-icons/bi";

function ProductItem({ product }) {
  return (
    <div className="bg-white relative flex flex-col items-center text-center text-sm font-semibold p-3 ">
      <button className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center border bg-white border-gray-200 rounded-lg transition-colors text-brand-color hover:border-brand-color shadow-md">
        <BiPlus size={18} />
      </button>
      <img src={product.image} alt="" className="w-20"></img>
      <div className="text-brand-color">₺ {product.price}</div>
      <div className="text-gray-900">{product.title}</div>
      <div className="text-gray-500">{product.alt}</div>
    </div>
  );
}

export default ProductItem;
