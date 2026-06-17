import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Products = () => {

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    const navigate = useNavigate();

    const fetchProducts = async()=>{
        try{
            const res = await axios.get('https://fakestoreapi.com/products');
            setProducts(res.data);
            // console.log(res.data);
            setLoading(false);
        }
        catch(err){
            console.log("failed to fetch products,.!",err);
        }
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    if(loading) return <h2>Loading.!!</h2>
  return (
    <div>
        {
            products.map((p)=>(
                <div className="card">
                    <img src={p.image} alt="" />
                    <h3>{p.title}</h3>
                    <p>{p.category}</p>
                    <button onClick={()=>navigate(`/product-details/${p.id}`)}>View Details</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products