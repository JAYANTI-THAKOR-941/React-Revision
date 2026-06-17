import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

const ProductDescription = () => {

    const [product,setProduct] = useState(null);
    const [loading,setLoading] = useState(true);

    const {id} = useParams();


    const fetchProduct = async()=>{
        try{
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(res.data);
            // console.log(res.data);
            setLoading(false);
        }
        catch(err){
            console.log("failed to fetch products,.!",err);
        }
    }

    useEffect(()=>{
        fetchProduct();
    },[id])

    if(loading) return <h2>Loading.!!</h2>

  return (
    <div>
        <img src={product.image} alt="" />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>Price:${product.price}</p>
        <button>Add TO cART</button>
    </div>
  )
}

export default ProductDescription