import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate, } from "react-router-dom";
import DataProvider from "./Context/DataProvider.jsx";


// Components...
import Navbar from "./Components/Navbar.js";
import Login from "./Components/Authentication/Login.js";
import SignUp from "./Components/Authentication/SignUp";
// import Home from "./Components/Home.js";
import Post from "./Components/Posts/post.jsx";

const PrivateRoute = ({ authenticated, ...props }) => {
  console.log("is authenticated: ", authenticated);
  return authenticated ?
    <>
      <Navbar />
      <Outlet />
    </>
    :
    <Navigate to="/Login" replace />

};

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <DataProvider>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/Login" element={<Login setAuthenticated={setAuthenticated} />} />
          <Route path="/SignUp" element={<SignUp />} />

          {/* <Route path='/' element={<PrivateRoute authenticated={authenticated} />} >
            <Route path='/' element={<Home />} />

          </Route> */}

          <Route path='/' element={<PrivateRoute authenticated={authenticated} />} >
            <Route path='/' element={<Post />} />
          </Route>

        </Routes>
      </Router>
    </DataProvider>
  );
}
export default App;
