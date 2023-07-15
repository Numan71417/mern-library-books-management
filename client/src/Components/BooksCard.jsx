import { React } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { toast } from "react-toastify";
const BooksCard = ({ bookdata }) => {
  const bookurl = "http://localhost:8001/api/v1/books/";

  const handleDelete = async () => {
    const response = await fetch(bookurl + bookdata._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      // dispatch({type:'DELETE_BOOK',payload:json})
      toast.success(`delete successfully ${bookdata.name}`);
    }
  };
  return (
    <>
      <div className="h-full w-full bg-gray-400 text-gray-800 font-bold bg-opacity-75 px-2 pl-5 my-4 py-2 rounded-lg overflow-hidden text-right relative">
        <div className=" flex">
         
          Serial no:
          <p className=" text-purple-100 font-medium  mx-1">
            {bookdata.serialno}
          </p>
        </div>
        <div className=" flex">
         
          Book name:
          <p className="text-purple-100 font-normal uppercase mx-1">
            {bookdata.name}
          </p>
        </div>
        <div className=" flex">
          
          Author:
          <p className="text-purple-100 font-normal uppercase mx-1">
            {bookdata.author}
          </p>
        </div>
        <div className="  flex">
          
          <p className="text-green-800 font-medium mx-1">
            {formatDistanceToNow(new Date(bookdata.updatedAt), {
              addSuffix: true,
            })}
          </p>
        </div>
        <span className="mt-4 bg-blue-600 hover:bg-blue-700 p-2 text-white uppercase rounded text-xs cursor-pointer mx-1 ">
          Edit
        </span>
        <span
          onClick={handleDelete}
          className="mt-4 bg-red-600 hover:bg-red-700 p-2 text-white uppercase rounded text-xs cursor-pointer "
        >
          Delete
        </span>
      </div>
    </>
  );
};

export default BooksCard;
