import React from "react";
import { useState, useEffect } from "react";
import categoryData from "../api/categories.json";
import Category from "../ui/Category";
import Title from "../ui/Title";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // setCategories(categoryData);
    setTimeout(() => setCategories(categoryData), 1000);
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto px-4">
        <Title>Kategoriler</Title>
        <div className="grid lg:grid-cols-10 md:grid-cols-8 xs:grid-cols-6 grid-cols-4">
          {!categories.length && "Yükleniyor..."}
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
