

import { useEffect,useState } from "react";

const ProductComponent = () => {
  



  const useEffect=(()=>{
    const fetchProductDetail = async () => {
    const res=  await
       fetch(`https://fakestoreapi.com/products/`)
       .then((res)=>{
    
         return res.json();
        
       })
   }
    fetchProductDetail();
  },[]);

 
};

export default ProductComponent;
