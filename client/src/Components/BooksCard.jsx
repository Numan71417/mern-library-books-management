import {React} from 'react'

const BooksCard = ({bookdata}) => {
  return (
    <div className='my-3 mx-5  border border-cyan-950 rounded-lg p-5 bg-blue-200 flex flex-col'> 
             <p className='text-green-500 inline'> Serial no: {bookdata.serialno}</p> 
             Books Name: 
             <p className='text-green-500 inline'>{bookdata.name}</p> 
             Author: 
             <p className='text-green-500 inline'>{bookdata.author}</p> 
             Date of Issue: 
             <p className='text-green-500 inline'>{bookdata.dateOfIssue}</p>
           
    </div>
  )
}

export default BooksCard
