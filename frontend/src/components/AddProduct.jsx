import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  // const [name,setName]= useState("")
  // const [price,setPrice]= useState("")
  // const [description,setDesc]= useState("")
  // const [category,setCategory]= useState("")

  // const navigate =useNavigate();

  // const AddProductInfo = async () =>{
  //   let formField = new FormData()
  //   formField.append('P_name',name)
  //   formField.append('price',price)
  //   formField.append('description',description)
  //   formField.append('category',category)

  //   await axios({
  //     method: 'post',
  //     url:'http://127.0.0.1:8000/app/',
  //     data:formField
  //   }).then((respose)=>{
  //     console.log(respose.data);
  //     navigate('/');
  //   })
    
  // }


  //second working method

  const [formData, setFormData] = useState({name:"",price:"",description:"",category:""})

 const handleChange=(e)=>{
  const {name,value} =e.target;
  setFormData({...formData,[name]:value});
 };

 const handleSubmit = async (e)=>{
  e.preventDefault();

  try{
    const response = await axios.post('http://127.0.0.1:8000/app/',formData);
    console.log(response)
    console.log("data submitted successfully: ", response.data);
    //reset form data after successful submission
    setFormData({name:"", price:"", description:"",category:""});
  }catch(error){
    console.error("error submitting form: ", error);
  }

 };





  return (
    <div className='container'>
        <h2>add product</h2>
        <form onSubmit={handleSubmit}>
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
                  type='text'
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
            <button type='submit'>submit</button>       
         </form>
    </div>
  )
}

export default AddProduct