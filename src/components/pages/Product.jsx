import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddToCart from "../AddToCart";
import LoadingSpinner from "../LoadingSpinner";

export default function Product() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product".error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className="product-container">
      <h1>Product details</h1>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="product-detail-container">
            <img src={product.image} alt="" />
            <div className="product-information">
              <h3>{product.title}</h3> <br />
              <h5>${product.price}</h5> <br /> {product.description} <br />
              <AddToCart key={product.id} product={product} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
