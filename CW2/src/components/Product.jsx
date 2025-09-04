import React from "react";
import "./Product.css";

function Product({ title, price, inStock, description, rating, tags, image }) {
  const hasDiscount = tags.includes("Скидка");
  const finalPrice = hasDiscount ? price * 0.9 : price;

  const formatPrice = (value) => `${value.toLocaleString()}₸`;
  const stars = "⭐".repeat(rating);

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />

      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>

      {inStock ? (
        <div className="product-price-block">
          {hasDiscount ? (
            <div>
              <span className="product-price-discount">
                {formatPrice(finalPrice)}
              </span>
              <span className="product-price-old">
                {formatPrice(price)}
              </span>
            </div>
          ) : (
            <span className="product-price">{formatPrice(price)}</span>
          )}
        </div>
      ) : (
        <span className="product-nostock">Нет в наличии</span>
      )}

      <p className="product-rating">{stars}</p>

      <div className="product-tags">
        {tags.map((tag, i) => (
          <span key={i} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Product;
