import React, { useState } from "react";
import ProductCard from "./ProductCard";
import './product-section.css';
import product1 from '../../images/products/1.png'
import product2 from '../../images/products/2.png'
import product3 from '../../images/products/3.png'
import product4 from '../../images/products/4.png'
import product5 from '../../images/products/5.png'
import product6 from '../../images/products/6.png'
import stars from '../../images/products/★★★★★.png'

const products = [
  {
    id: 1,
    title: "X5 Extreme Body Lotion",
    oldPrice: 35000,
    price: 30000,
    tag: "Best Seller",
    img: product1
  },
  {
    id: 2,
    title: "AHA Face Toner",
    oldPrice: 75000,
    price: 60000,
    tag: "Refined",
    img: product2,
  },
  {
    id: 3,
    title: "Anti Stretchmark Oil",
    oldPrice: 75000,
    price: 70000,
    tag: "Top",
    img: product3
  },
  {
    id: 4,
    title: "Acne Serum",
    oldPrice: 35000,
    price: 30000,
    tag: "Best Seller",
    img: product4
  },
  {
    id: 5,
    title: "Luminous Body Lotion",
    oldPrice: 35000,
    price: 30000,
    tag: "Best Seller",
    img: product5
  },
  {
    id: 6,
    title: "Skin Glow Moisturizing Lotion",
    oldPrice: 35000,
    price: 30000,
    tag: "Best Seller",
    img: product6
  },
];

const  ProductList = ()=> {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const isAlreadyInCart = prev.find((item) => item.id === product.id);
      if (isAlreadyInCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <div>
      <div className="product-header">Discover Our Best-Sellers</div>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>

      {/* Simple cart display */}
      <div style={{ marginTop: "30px" }}>
        <h3>Cart</h3>
        {cart.length === 0 && <p>No items in cart</p>}
        {cart.map((item) => (
          <p key={item.id}>
            {item.title} x {item.qty} — ₦{item.price * item.qty}
          </p>
        ))}
      </div>
    </div>
  );
}
export default ProductList;