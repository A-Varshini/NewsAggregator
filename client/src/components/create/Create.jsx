import React from "react"
import "./create.css"
import { IoIosAddCircleOutline } from "react-icons/io"
import { useState } from "react"
import { addInfo } from "../../service/api"
import axios from "axios"
export const Create = () => {
  const [files, setfiles] = useState([]);
 const handleImageSubmit = (e) => {
  if (files.length >0 && files.length <7){
    const promises =[];
  }
 }
const defaultValue={
  file:'',
  title:'',
  textarea:''
}

  const[info,setInfo]=useState(defaultValue);
  console.log(info)
  const onValueChange =(e) =>{
    // console.log(e.target.name,e.target.value);
    setInfo({...info,[e.target.name]: e.target.value});
   
  }

  const addInfoDetails= async()=>{
  //  addInfo(info);
  //  console.log(addInfo(info));

   
const URL=`http://localhost:8000`;
 const addInfo = async(data) =>{
    try{
       await axios.post(`${URL}/create`, data);

     

    }catch(error){
        console.log("Error while calling add info Api", error);
    }
}
  }
  return (
    <>
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img '>
            <img src='' alt='image' class='image-preview' />
          </div>
          <form action="/create">
            <div className='inputfile flexCenter'>
              <input type='file' accept='image/*' alt='img'  onChange={(e) => setfiles(e.target.files)} name="file" />
              <button onClick={handleImageSubmit} type="button">Upload</button>
            </div>
            <input type='text' placeholder='Title' onChange={(e) => onValueChange(e)} name="title"/>

            <textarea  id='' cols='30' rows='10' onChange={(e) => onValueChange(e)} name="textarea"></textarea>

            <button className='button' onClick={() => addInfoDetails}>Create Post</button>
          </form>
        </div>
      </section>
    </>
  )
}
