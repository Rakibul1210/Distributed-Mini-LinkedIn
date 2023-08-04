import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate, } from "react-router-dom";
import DataProvider from "./Context/DataProvider.jsx";


// Components...
import Navbar from "./Components/Navbar.js";
import Login from "./Components/Authentication/Login.js";
import SignUp from "./Components/Authentication/SignUp";
import Home from "./Components/Home.js";
import CreatePost from "./Components/Posts/createPost.jsx";

const PrivateRoute = ({ user, ...props }) => {
  console.log("user Name from private route: ", user);
  return user ?
    <>
      <Navbar user={user} />
      <Outlet />
    </>
    :
    <Navigate to="/Login" replace />

};

function App() {
  const [user, setUser] = useState('');

  return (
    <DataProvider>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/Login" element={<Login setUser={setUser} />} />
          <Route path="/SignUp" element={<SignUp />} />


          <Route path='/' element={<PrivateRoute user={user} />} >
            <Route path='/' element={<Home />} />
          </Route>


          <Route path='/createPost' element={<PrivateRoute user={user} />} >
            <Route path='/createPost' element={<CreatePost user={user} />} />
          </Route>

        </Routes>
      </Router>
    </DataProvider>
  );
}
export default App;
