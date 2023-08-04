import React, { useState, useContext } from "react";
import { Button, Form, Input } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/api.js";
import { Typography } from "@mui/material";
import { DataContext } from "../../Context/DataProvider.jsx";

const Login = ({ setUser }) => {
  const [error, setError] = useState("");
  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  const login = async (values) => {
    try {
      let res = await API.login(values);
      console.log("response from server:", res);

      if (res.isSuccess) {
        console.log("login successful!", res.data.user);

        setUser(res.data.user);
        console.log("logged in as:", res.data.user);


        sessionStorage.setItem("accessToken", `Bearar ${res.data.accessToken}`);
        sessionStorage.setItem(
          "refreshToken",
          `Bearar ${res.data.refreshToken}`
        );
        setAccount({ user: res.data.user });

        navigate("/");
      } else {
        setError(res.msg);
        console.error("login failed:", res.msg);
      }
    } catch (error) {
      setError(error.msg);
      console.error("Error during login:", error.msg);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      {/* <h3 className="mb-4">Welcome to your professional community</h3> */}

      <div className="container shadow-lg p-4 mt-1 bg-white rounded d-flex flex-column justify-content-center align-items-center">
        <div className="text-center mb-4">
          {/* <img src="logo.png" alt="Logo" className="logo" /> */}
          <h3>Log In</h3>
        </div>

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={login}
          autoComplete="off"
        >
          <Form.Item
            label="Email" // Change the label to "Email"
            name="email" // Change the name to "email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <div className="text-center-forgot-password">
            <Link to="#forgotPassword">Forgot Password?</Link>
          </div>

          {error && <Typography>{error}</Typography>}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className="submit-button">
              Log In
            </Button>
          </Form.Item>

          <div className="text-center-create-account">
            <span>New User?</span> <Link to="/SignUp">Create New Account</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
