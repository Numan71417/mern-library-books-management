import { Route, Routes } from "react-router-dom";
// import axios from "axios";
import HomePage from "./Pages/Home";
import Navbar from "./Components/Navbar";

// axios.defaults.baseURL = 'http://127.0.0.1:5000'
// axios.defaults.withCredentials=true;

function App() {

  return (
<>

<div className="">
 
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />  
    </Routes>
    
</div>

    
</>
  );
}

export default App;
