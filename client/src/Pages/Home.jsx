import React, { useEffect, useState } from 'react'
import BooksCard from '../Components/BooksCard'

const HomePage = () => {
  const bookurl ='http://localhost:8001/api/v1/books'
    const [books, setBooks ] = useState("")

  useEffect(()=>{
    const fetchBooks = async ()=>{
        try {
            const response = await fetch(bookurl)
            const json = await response.json();

            if(response.ok){
                setBooks(json)
                console.log(`working fetching data ${json}`);
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    fetchBooks();
  }, [])  

  return (
    <div>
      <h1 className='text-4xl'>Your Books</h1>

      {books && books.map((bookdata) => (
     <div key={bookdata._id } >    
       <BooksCard bookdata={bookdata} />
     </div>
      ))}

      

    </div>
  )
}

export default HomePage
