import React, { useState } from "react";

const ProductData = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2499,
      category: "Electronics",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQYA663zN7bjtE2YxaNW9MeE2EJVooSwo58-VmtYUgSk2GLzjeI7AWSk6S3B1c6wXxBuMHozTNEBBKEfloFdTpUPJboCJiJ5gSnrgjoPKXostZdpJK9oLTDeTs",
      stock: 15,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 3999,
      category: "Electronics",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTsnMb8HDbx4vRhdriAX7f3KdUMwFhqwhnpkHu9mK3d4Io3gBUt_FH-6SAPyD7nxtija_yc1LNnYmRT8UHdW2zeOw9YISqW-EwE3RUAOP9AKX5FuCNDaUyY",
      stock: 10,
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 2999,
      category: "Footwear",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSFpXX3lM7w5VvAlrasOO6unxYx29IQo9FZg9OQvx5I-tJt9iAYG8NfUO3ivJw6uL54j3w8PNcJAnM2E4dosi6jgsTZdOuTYyRxASUoGoF5hjGN5rKC4ZWk0pU",
      stock: 20,
    },
    {
      id: 4,
      name: "Backpack",
      price: 1499,
      category: "Accessories",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQwx-7J8snKoCy2nVht3S3-B57tBwpM7KooszkziV36zMSrMKJ9_-sWVSlgvlmV-EfYLJFlFvkNPJ35wkz9wmoMKAyuaPx2DeYslHTz1xrbbFo_sv55g6F1qrE",
      stock: 8,
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 1999,
      category: "Electronics",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNEXetsNniRPBkWNa-iPazJ7b5IB1qVusCVJKCozeK2w_SMlGA2OiA380tJPT6r3Lt3A-dNONpZltgvuRHH-TQaFT2fHM_jAu4H66xLBE",
      stock: 12,
    },
  ]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filterProducts = products.filter((p)=>{
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category == "all" || category == p.category.toLowerCase();
    return matchCategory && matchSearch;
  })

  return (
  <div className="container">
    <input
      type="text"
      name="search"
      value={search}
      placeholder="Search Products..."
      onChange={(e) => setSearch(e.target.value)}
    />

    <select
      name="category"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="all">All</option>
      <option value="electronics">Electronics</option>
      <option value="accessories">Accessories</option>
      <option value="footwear">Footwear</option>
    </select>

    <div className="products-grid">
      {filterProducts.map((p) => (
        <div className="card" key={p.id}>
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>{p.category}</p>
          <button>Shop Now</button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProductData;
