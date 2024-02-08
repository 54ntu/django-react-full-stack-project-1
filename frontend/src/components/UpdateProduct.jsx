import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const UpdateProduct = () => {
  
  // const[name,setName] = useState("");
  // const[price,setPrice] = useState("");
  // const[description,setDescription] = useState("");
  // const[category,setCategory] = useState("");

  const [formData, setFormData] = useState({name:"",price:"",description:"",category:""})
 

  const { id } = useParams();
  const navigate = useNavigate()

  const getData= async() =>{
    try{

      const {data} = await axios.get(`http://127.0.0.1:8000/app/up_product/${id}`)
      console.log(data);
      // setName(data.name);
      // setPrice(data.price);
      // setDescription(data.description);
      // setCategory(data.category);
      setFormData({
        name:data.name || "",
        price: data.price || "",
        description : data.description || "",
        category : data.category || ""
      })
    }catch(error){
      console.error("error fetching data: ", error);
    }

  }


useEffect(()=>{

    getData();

  },[])

  //for update data
  const handleChange=(e)=>{
    const {name,value} =e.target;
    setFormData({...formData,[name]:value});
    console.log(name)
  };

  const submitData = async (e)=>{
    e.preventDefault();

    try{
      const response = await axios.put(`http://127.0.0.1:8000/app/up_product/${id}/`,formData);
      console.log(response);
      console.log("data submitted successfully: ", response.data);
      // lets clear the form data
      // setFormData({name:"",price:"", description:"",category:""});
      navigate(`/${id}`)


    }catch(error){
      console.error("error updating the data: ", error);
    }

  }


  return (
    <div>
        <h3>product update page</h3>
        <form  onSubmit={submitData}>
              <div className='form-group'>
                  <input 
                  type='text'
                  className='form-control form-control-lg mb-3'
                  placeholder='enter product name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>
          
          <div className='form-group'>
            <input 
                  type='number'
                  className='form-control form-control-lg mb-3'
                  placeholder='enter product price'
                  name='price'
                  value={formData.price}
                  onChange={handleChange}
                  />
          </div>
          
          <div className='form-group'>
            <input 
                type='text'
                className='form-control form-control-lg mb-3'
                placeholder='enter product description'
                name='description'
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className='form-group'>
                <input 
                  type='text'
                  className='form-control form-control-lg mb-3'
                  placeholder='enter product category'
                  name='category'
                  value={formData.category}
                  onChange={handleChange}
                />
            </div>
            <button type='submit' className='btn btn-primary'>submit</button>       
         </form>
    </div>
  )
}

export default UpdateProduct