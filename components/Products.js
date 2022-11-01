import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";

const url = "https://dummyjson.com/products";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortData,setSortData]=useState("");
  const[showProducts,setShowProducts]=useState("");
  const[allProducts,setAllProducts]=useState([]);

  const getProducts = async () => {
    const response = await axios.get(url);

    setProducts(response.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  function setSortDatas(){
    setSortData(products.title)

  }
  

  return (
    <>
      <div>
        <h1>Products</h1>
        <div className="btnn">
        <button className="btn2" onClick={()=>setSortDatas()}>Price - High To Low</button>
        <button className="btn3" onClick={()=>setSortDatas()}>Price - Low To High</button>
        </div>
        </div>
      <div className="products-container">
        {products.map((products) => {
          const { id, title, price, rating, thumbnail } = products;

          return (
            <>
              <div key={id} className="card">
                <div>
                  <img src={thumbnail} alt={title} />
                </div>
                <div className="card-description">
                  <h3>{title}</h3>
                  <h3>$ {price}</h3>
                  <h3>Rating: {rating}</h3>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
