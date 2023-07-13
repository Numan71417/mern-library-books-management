// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// import { createContext } from 'react'
// export const UserContext = createContext({});

// const UserContextProvider = ({children}) => {

//   const [user , setUser] = useState(null);
  
// useEffect(()=>{
//   if(!user){
//      axios.get('/profile').then( ({userdata})=>{
//       setUser({userdata})
      
//     } )
//   }
// }, [])

//   return (

//     <UserContext.Provider value={{user, setUser}} >
//       {children}
//     </UserContext.Provider>
//   )
// }

// export default UserContextProvider
