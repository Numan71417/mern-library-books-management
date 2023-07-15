import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BooksForm = () => {
const bookurl = "http://localhost:8001/api/v1/books";

  const [serialno, setSerialno] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

//   useEffect(()=>{
    const submitHandler = async(e)=>{
        e.preventDefault();

        const bookData =  {serialno, name, author}
try {
    const response = await fetch(bookurl, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(bookData)
    })

    const json = await response.json();
    console.log(json);
    if(!response.ok){
    toast.error("all fields required");
    }
    
    if(response.ok){
        setSerialno('');
        setName('');
        setAuthor('');
        console.log(json);
        toast.success("Added Successfully");
    }

  
    } catch (error) {
        toast.error(error);
        console.log(error);
    }
    }       
//   },[])
    

  return (
    <div>
    


      <h2 className="text-gray-100 text-lg font-medium title-font mb-5">
        Add Books
      </h2>


      <form onSubmit={submitHandler} className="md:w-1/2 max-w-lg">
      <div className="relative mb-4">

        {/* Serial no  */}
        <input
          className="w-full bg-gray-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          placeholder="Serial no"
          value={serialno}
          onChange={(event) => {
            setSerialno(event.target.value);
          }}
        />
        </div>
        {/* book name  */}
        <div className="relative mb-4">
        <input
          className="w-full bg-gray-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          placeholder="Book name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        </div>
        {/* Author  */}
        <div className="relative mb-4">
        <input
          className="w-full bg-gray-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
        </div>

        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Add Book
          </button>
        </div>
      </form>
     
    <ToastContainer />
    {/* </section> */}
  </div>
  )
}

export default BooksForm
