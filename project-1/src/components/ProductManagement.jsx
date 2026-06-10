import React from "react";

const ProductManagement = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      stock: true,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 25000,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
      stock: false,
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      stock: true,
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 7000,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      stock: true,
    },
    {
      id: 5,
      name: "Tablet",
      price: 18000,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
      stock: false,
    },
     {
      id: 1,
      name: "Laptop",
      price: 50000,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      stock: true,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 25000,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
      stock: false,
    },
  ];

  //   spread
  const updatedProducts = [
    ...products,
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 5500,
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
      stock: true,
    },
  ];

  //   filter
  const availableProducts = updatedProducts.filter((p) => p.stock);

  //   reduce

  const totalRevenue = updatedProducts.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <div>
      <h1 className="title">Explore Our Products</h1>

      <div className="product-container">
        {updatedProducts.map((p) => {
          const { id, name, price, image, stock } = p;

          return (
            <div className="product-card" key={id}>
              <img src={image} alt="" />
              <h3>{name}</h3>
              <p>Price:{price}</p>
              <p>{stock ? "In Stock" : "Out Of Stock"}</p>
            </div>
          );
        })}
      </div>

      {/* availableProducts
    {
        availableProducts.map((product)=>(
            <div className="card">
                <img src={product.image} alt="" />
                <h3>{product.name}</h3>
            </div>
        ))
    } */}

    <h2>Total : {totalRevenue}</h2>
    </div>
  );
};

export default ProductManagement;
