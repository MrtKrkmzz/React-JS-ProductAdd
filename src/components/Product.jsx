import React, { useState } from 'react'
import { ProductData } from '../data/ProductData'
import ProductForm from './Productform'
const Product = () => {
  const  [proData,setProData]=useState(ProductData)
  return (
  <>
    <ProductForm setProData={setProData}/>
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
      {proData.map(item=>(
         <div style={{border:"1px solid #333",width:"300px",textAlign:"center"}}>
         <h1>{item.name}</h1>
         <img style={{width:"230px",height:"130px"}} src={item.img} alt="" /> <br />
         <span>{item.price} €</span>
         </div>
      ))}    
   </div>
  </>
  )
}

export default Product