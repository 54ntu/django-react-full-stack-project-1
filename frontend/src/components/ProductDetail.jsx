import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate, useParams} from 'react-router-dom'

const ProductDetail = () => {

  const[item,setItem] = useState();


  const {id} = useParams()
  const navigate = useNavigate();

useEffect(()=>{

  const fetchData= async ()=>{
    const {data} = await axios.get(`http://127.0.0.1:8000/app/up_product/${id}`);
    console.log(data);
    setItem(data)
  };

  fetchData();
},[])

//delete products

const deleteProduct= async(id) =>{
  const response = await axios.delete(`http://127.0.0.1:8000/app/up_product/${id}`);
  console.log("data deleted successfully", response.data);
  navigate('/');


}


  return (
    <div>
      <h2 >product detail page</h2>
      <div>
        <h3>{item?.name}</h3>  {/* ?: optional chaining operator which short circuits execution without causing error when the item objects is null or undefined */}
        <h4>{item?.price}</h4>
        <h5>{item?.description}</h5>
        <h6>{item?.category}</h6>
        <Link className='btn btn-primary m-2' to={`/${item?.id}/update`}>Update</Link> {/* optional chaining operator "? " is very important for defensive programming */}
        <Link className='btn btn-danger m-2' onClick={()=> deleteProduct(item.id)}>Delete</Link>
      </div>
    </div>
  )
}

export default ProductDetail