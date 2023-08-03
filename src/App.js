import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate, } from "react-router-dom";
import DataProvider from "./Context/DataProvider.jsx";


// Components...
import Navbar from "./Components/Navbar.js";
import Login from "./Components/Authentication/Login.js";
import SignUp from "./Components/Authentication/SignUp";
import Home from "./Components/Home.js";
import CreatePost from "./Components/CreatePosts/createPost.jsx";

const PrivateRoute = ({ userName, ...props }) => {
  console.log("user Name from private route: ", userName);
  return userName ?
    <>
      <Navbar userName={userName} />
      <Outlet />
    </>
    :
    <Navigate to="/Login" replace />

};

function App() {
  const [userName, setUserName] = useState('');

  return (
    <DataProvider>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/Login" element={<Login setUserName={setUserName} />} />
          <Route path="/SignUp" element={<SignUp />} />


          <Route path='/' element={<PrivateRoute userName={userName} />} >
            <Route path='/' element={<Home />} />
          </Route>


          <Route path='/createPost' element={<PrivateRoute userName={userName} />} >
            <Route path='/createPost' element={<CreatePost userName={userName} />} />
          </Route>

        </Routes>
      </Router>
    </DataProvider>
  );
}
export default App;
