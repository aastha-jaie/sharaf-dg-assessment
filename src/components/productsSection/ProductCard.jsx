import React from "react";
import './product-section.css';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
        <div className='product-card-content'>
      <p className="tag">{product.tag}</p>
      <img src={product.img} alt={product.title} style={{ width: "100px", height: "100px" }} />
       </div>
       <div className='product-card-price'>
        <div className="product-card-price-left">
         <span>{product.title}</span>
        <span style={{ textDecoration: "line-through", marginRight: "8px" }}>
          ₦{product.oldPrice.toLocaleString()} <strong>₦{product.price.toLocaleString()}</strong>
        </span>
       
        </div>
        <div className="product-card-price-right">
            <button onClick={() => onAddToCart(product)} className="add-to-cart">Add to Cart</button>
        </div>
     </div>
    </div>
  );
}
