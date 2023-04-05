import React, { useState } from 'react'
const Productform = ({setProData}) => {
const [name,setName]=useState("")
const [img,setImg]=useState("")
const [price,setPrice]=useState("")


// İNPUT FUNCTİON
 const brandHandler = (e) =>{
   setName(e.target.value)
 }
 const imgHandler = (e) =>{
   setImg(e.target.value)
 }
 const priceHandler = (e) =>{
   setPrice(e.target.value)
 }
// İNPUT FUNCTİON



 const submitHandler = (e)=> {
    e.preventDefault()
    const newCars = {
       name,
       img,
       price
    }
    setProData((prevState)=> [newCars ,...prevState])
 }



  return (
    <form style={{display:"flex",flexDirection:"column",width:"50%",margin:"auto",margin:"auto",marginBottom:"50px"}} onSubmit={submitHandler}>
        <label>Araba Markası</label>
        <input type="text" placeholder='Araba Markası Giriniz...' onChange={brandHandler} />
        <label>Araba Fotoğrafı - Link Olarak Giriniz</label>
        <input type="text" placeholder='Araba Fotoğrafı Giriniz...'onChange={imgHandler} />
        <label>Araba Fiyatı</label>
        <input type="number" placeholder='Araba Fiyatı Giriniz...' onChange={priceHandler}/>
        <button style={{width:"50%",margin:"auto",marginTop:"5px",backgroundColor:"#333",color:"white",cursor:"pointer"}}>Ekle</button>
    </form>
  )
}

export default Productform