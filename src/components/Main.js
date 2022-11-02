import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import SearchForm from "./SearchForm";

import axios from "axios";

const url = "https://dummyjson.com/products";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [showProducts, setShowProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [filterData, setFilterData] = useState("");

  const getValue = async () => {
    setLoading(true);
    const response = await axios.get(url);
    setAllProducts(response.data.products);
    setProductsData(response.data.products);
    setLoading(false);
  };

  const filterResult = () => {
    console.log(allProducts);
    const result = allProducts.filter((indItem) => {
      return indItem.category === currentCategory;
    });

    setProductsData(result);
    console.log(result);
  };

  const filterProduct = (sortedData) => {
    console.log(sortedData);
  
  if(filterData==="Price-High To Low"){
    setProductsData(productsData.sort((a,b)=>b.price-a.price

  ))}

  else{
    setProductsData(productsData.sort((a,b)=>a.price-b.price

  ))};

  setFilterData(sortedData);
  };

  useEffect(() => {
    getValue();
  }, []);

  useEffect(() => {
    filterResult();
  }, [currentCategory]);

  useEffect(() => {
    filterProduct();
  }, [filterData]);

  return (
    <div>
      <Categories
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
      />
      <SearchForm
        filterData={filterData}
        setFilterData={setFilterData}
        productsData={productsData}
        loading={loading}
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
      />
    </div>
  );
};

export default Main;
