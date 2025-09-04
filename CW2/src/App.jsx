import React from "react";
import Product from "./components/Product";

function App() {
  const products = [
    {
      title: "Наушники Sony WH-1000XM4",
      price: 99000,
      inStock: true,
      description: "Беспроводные наушники с шумоподавлением.",
      rating: 5,
      tags: ["Хит", "Скидка"],
      image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
    },
    {
      title: "Смартфон Samsung Galaxy S23",
      price: 399000,
      inStock: true,
      description: "Флагманский смартфон с мощной камерой.",
      rating: 4,
      tags: ["Новинка"],
      image: "https://resources.cdn-kaspi.kz/img/m/p/h0f/hcd/86009485426718.jpg?format=gallery-medium",
    },
    {
      title: "Ноутбук MacBook Air M2",
      price: 650000,
      inStock: false,
      description: "Лёгкий и мощный ноутбук для работы и учебы.",
      rating: 5,
      tags: ["Топ"],
      image: "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
    },
  ];

  return (
    <div style={{ background: "#f8f9fa", minHeight: "100vh", padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#222" }}>
        Каталог продуктов
      </h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {products.map((item, index) => (
          <Product key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
