import React, { useEffect, useState } from "react";
import BooksCard from "../Components/BooksCard";
import BooksForm from "../Components/booksForm";

const HomePage = () => {
  const bookurl = "http://localhost:8001/api/v1/books";
 
  const [books, setBooks] = useState("");
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(bookurl);
        const json = await response.json();

        if (response.ok) {
          setBooks(json);
          console.log(`working fetching data ${json}`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);




  return (
    <div className="container px-16 my-4 text-gray-700 ">
      <h1 className="text-4xl text-center text-blue-100">Your Books</h1>
      
      <div className="container  flex">

      <div className="mb-8 w-[50%] text-gray-100">
      <BooksForm/>
    </div>
    
     
  <div className="py-2 w-full  ">
   
    {books &&
        books.map((bookdata) => (
          <div   key={bookdata._id}>
            <BooksCard bookdata={bookdata} />
          </div>
        ))}
    </div>

    </div>
    </div>
  );
};

export default HomePage;
