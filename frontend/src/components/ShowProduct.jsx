import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ShowProduct = () => {
  const [products,setProducts]= useState([])

  const getProducts=async()=>{
      const response = await axios.get('http://127.0.0.1:8000/app/')
      setProducts(response.data);
  }


  useEffect(()=>{
    getProducts();

  },[])

  return (
   
       
        <div className='detail-card'>
        {
          products.map((product,index)=>(
             <Card style={{ width: '18rem' }} className='m-2 rounded shadow-lg' key={index}>
                <Card.Body>
                  <Card.Title >{product.name}</Card.Title>
                  <Card.Text>
                   {product.description} </Card.Text>
                  <p>Price: <Card.Text>{product.price}</Card.Text></p>
                  <p >{product.category}</p>
                  <Link className='btn btn-primary' to={`/${product.id}`}>show detail</Link>
                </Card.Body>
            </Card>
          ))
        }
        </div>
  )
}

export default ShowProduct