import React, { useState } from "react";
import axios from "axios";
import "./index.scss";

const ProductSearch = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sortOrder, setSortOrder] = useState(null); // Track sort order

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true);
    setError("");

    try {
      const backendURL =
        process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
      const response = await axios.get(`${backendURL}/search?query=${query}`);
      setProducts(response.data);
    } catch (err) {
      setError("An error occurred while fetching the data");
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (order) => {
    const sortedProducts = [...products];
    if (order === "asc") {
      sortedProducts.sort(
        (a, b) =>
          parseFloat(a.price.replace(/[^0-9.-]+/g, "")) -
          parseFloat(b.price.replace(/[^0-9.-]+/g, ""))
      );
    } else if (order === "desc") {
      sortedProducts.sort(
        (a, b) =>
          parseFloat(b.price.replace(/[^0-9.-]+/g, "")) -
          parseFloat(a.price.replace(/[^0-9.-]+/g, ""))
      );
    }
    setSortOrder(order);
    setProducts(sortedProducts);
  };

  return (
    <>
      <div className="full-page-search">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // Check if 'Enter' key is pressed
                handleSearch(e); // Trigger the search function
              }
            }}
          />
        </div>

        <div className="product-search">
          {/* Sorting Buttons */}
          {products.length > 0 && (
            <div className="sort-buttons">
              <button onClick={() => handleSort("asc")}>Sort by Price ↑</button>
              <button onClick={() => handleSort("desc")}>
                Sort by Price ↓
              </button>
            </div>
          )}
          {loading && <div className="spinner"></div>}{" "}
          {/* Show loading spinner */}
          {error && <div className="error-message">{error}</div>}
          {/* Display Products */}
          <div className="products-container">
            {products.length > 0
              ? products.map((product, index) => (
                  <div className="product-card">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={product.img}
                        alt={product.title}
                        className="product-image"
                      />
                      <h3 className="product-title">{product.title}</h3>
                      <p className="product-price">{product.price}</p>
                    </a>
                  </div>
                ))
              : !loading && <p className="no-results">No results found.</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSearch;
