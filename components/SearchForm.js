import React from "react";

export default function SearchForm({
  productsData,
  loading,
  searchTitle,
  setSearchTitle,
  setFilterData,
  filterData,
  allProducts
}) {
  return (
    <>
      <section className="section search">
        <form className="search-form">
          <div className="form-control">
            <label htmlFor="title">search your favorite product</label>
            <input
              type="text"
              placeholder="search"
              onChange={(e) => {
                setSearchTitle(e.target.value);
              }}
            />
          </div>
        </form>
      </section>

      <h1>Products</h1>
      <div className="btnn">
        <button className="btn2" onClick={()=>{
          setFilterData(productsData)

        }}>Price - High To Low</button>

        <button className="btn3" onClick={()=>{
          setFilterData(allProducts)

        }}>Price - Low To High</button>
      </div>

      <div className="products-container">
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          productsData
            .filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.title.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })

            .map((prodTitle) => (

              <div key={prodTitle.id} className="card">
                <div>
                  <img src={prodTitle.thumbnail} alt={prodTitle.title} />
                </div>
                <div className="card-description">
                  <h4>{prodTitle.title}</h4>
                  <h4>$ {prodTitle.price}</h4>
                  <h4>Rating: {prodTitle.rating}</h4>
                  <h4>Brand: {prodTitle.brand}</h4>
                </div>
              </div>
            ))
        )}
      </div>
    </>
  );
}
