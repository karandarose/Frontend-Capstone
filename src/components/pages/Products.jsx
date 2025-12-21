import { useState, useEffect } from "react";

import ProductCard from "../ProductCard";
import snow from "../../assets/snow.mp4";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("");
  const [currentSort, setCurrentSort] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  function handleFilter(category) {
    setCurrentFilter(category);
    let filteredProducts = products.filter(
      (product) => product.category === category
    );
    if (currentSort) {
      filteredProducts = applySorting(filteredProducts, currentSort, sortOrder);
    }
    setFilteredProducts(filteredProducts);
  }
  function applySorting(productArray, property, order) {
    return productArray.sort((a, b) => {
      if (order === "asc") {
        return a[property] > b[property] ? 1 : -1;
      } else {
        return a[property] < b[property] ? 1 : -1;
      }
    });
  }
  function handleSort(property) {
    setCurrentSort(property);
    const baseList =
      currentFilter === ""
        ? products
        : products.filter((product) => product.category === currentFilter);
    const sorted = applySorting(baseList, property, sortOrder);

    setFilteredProducts(sorted);
  }
  function handleOrder() {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    const baseList =
      currentFilter === ""
        ? products
        : products.filter((product) => product.category === currentFilter);
    const sorted = applySorting(baseList, currentSort, newOrder);

    setFilteredProducts(sorted);
  }
  return (
    <div>
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          id="snow.mp4"
          style={{ width: "100%", height: "100%" }}
        >
          <source src={snow} type="video/mp4" />
        </video>
      </div>
      <h1>Products</h1>
      <label htmlFor="filter">Filter: </label>
      <select
        name="filter"
        id="filter"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="">Select</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
      <label htmlFor="sort">Sort: </label>
      <select
        name="sort"
        id="sort"
        onChange={(e) => handleSort(e.target.value)}
      >
        <option value="id">ID</option>
        <option value="title">Title</option>
        <option value="price">Price</option>
      </select>
      <label htmlFor="order">Order: </label>
      <button onClick={() => handleOrder()}>
        Order: {sortOrder === "asc" ? "ascending" : "desending"}
      </button>
      {filteredProducts.length === 0 ? (
        <div className="products-wrapper">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="products-wrapper">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
