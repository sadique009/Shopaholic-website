import React from "react";

const categories = [
  {
    id: 1,
    category: "smartphones",
    image: "https://dummyjson.com/image/i/products/2/2.jpg",
  },

  {
    id: 2,
    category: "laptops",
    image: "https://dummyjson.com/image/i/products/6/1.png",
  },

  {
    id: 3,
    category: "home-decoration",
    image: "https://dummyjson.com/image/i/products/26/2.jpg",
  },

  {
    id: 4,
    category: "groceries",
    image: "https://dummyjson.com/image/i/products/22/2.jpg",
  },

  {
    id: 5,
    category: "fragrances",
    image: "https://dummyjson.com/image/i/products/13/4.jpg",
  },

  {
    id: 6,
    category: "skincare",
    image: "https://dummyjson.com/image/i/products/16/1.png",
  },
];

const Categories = ({setCurrentCategory }) => {
  return (
    <>
      <div>
        <h1> Categories</h1>
      </div>
      <section className="indCategory">
        {categories.map((indCategory) => {
          const { id, category, image } = indCategory;

          return (
            <>
              <div key={id}>
                <img src={image} alt={category} />
                <div className="desc">
                  <h3>
                    <button
                      className="btn"
                      onClick={() => {
                        setCurrentCategory(category);
                      }}
                    >
                      {category}
                    </button>
                  </h3>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};


export default Categories;
