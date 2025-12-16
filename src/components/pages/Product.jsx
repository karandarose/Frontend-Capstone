// fetch a single product on this page.
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import AddToCart from "../AddToCart";

export default function Product() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching product".error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
    console.log(Product);
  }, []);

  // const productDetails = [];
  // for (let i = 1; i <= 10; i++)
  //   if (product[`strProduct${i}`]) {
  //     productDetails.push({
  //       id: product[`strProduct${i}`],
  //       title: product[`strProduct${i}`],
  //       price: product[`strProduct${i}`],
  //       description: product[`strProduct${i}`],
  //       category: product[`strProduct${i}`],
  //     });

  return (
    <div>
      <h1>Product details</h1>
      <div className="product-detail-container">
        <img src={product.image} alt="" />
        <div className="product-information">
          <h3>{product.title}</h3> <br />
          <h5>${product.price}</h5> <br /> {product.description} <br />
          <AddToCart />
        </div>
      </div>
    </div>
  );
}
