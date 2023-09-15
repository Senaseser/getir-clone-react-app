import React from "react";

function Category({ category: { id, title, image } }) {
  return (
    <a
      href="#"
      className="flex flex-col group items-center text-center p-4 gap-y-2 transition hover:bg-purple-50"
    >
      <img
        alt={title}
        src={image}
        className="h-12 w-12 rounded border border-gray-200"
      ></img>
      <span className="text-sm font-semibold text-gray-700 group-hover:text-primary-brand-color tracking-tight whitespace-nowrap">
        {title}
      </span>
    </a>
  );
}

export default Category;
