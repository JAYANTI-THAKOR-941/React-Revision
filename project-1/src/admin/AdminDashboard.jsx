import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const [products,setProducts] = useState(()=>{
    const allProducts = localStorage.getItem('our-products');
    return allProducts ? JSON.parse(allProducts) : []
  });

  const handleSubmit = (e)=>{
    e.preventDefault();

    const newProduct = {
        id:products.length + 1,
        name,
        price,
        image
    }
    setProducts([...products,newProduct]);
    alert("Product added successfully.!");
    setName("");
    setImage("");
    setPrice("");
  }

  useEffect(()=>{
    localStorage.setItem("our-products",JSON.stringify(products))
  },[products])


  const handleDelete = (id)=>{
   const updatedProducts = products.filter((p)=>p.id != id)
   setProducts(updatedProducts)
   alert("Product deleted successfully.!")
  }

  return (
    <div>
      <h1>AdminDashboard</h1>

        <div className="card-container">
            {products.map((p)=>(
                <div className="product-card">
                    <img src={p.image} alt="" />
                    <h3>{p.name}</h3>
                    <p>Price:{p.price}</p>
                    <button onClick={()=>handleDelete(p.id)}>Delete</button>
                </div>
            ))}
        </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image"
          value={image}
          name="image"
          onChange={(e) => setImage(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
