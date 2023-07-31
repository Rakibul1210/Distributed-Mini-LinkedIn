import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import API from "/home/rakibul/6thSemester/DistributedSystem/linked-in/src/api/api.js";
import { Typography } from "@mui/material";

const SignUp = () => {
  const signUpInitals = {
    fullName: "",
    email: "",
    password: "",
  };
  const [SignUpData, setSignUpData] = useState(signUpInitals);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  console.log(SignUpData);

  const signUp = async (values) => {
    setSignUpData(values);
    console.log(
      "Finished with: ",
      SignUpData.email,
      SignUpData.fullName,
      SignUpData.password
    );

    try {
      let response = await API.signUp(values);
      setSignUpData(signUpInitals);
      console.log("response from server:", response);

      if (response.isSuccess) {
        console.log("Sign-up successful!");
        navigate("/login");
      } else {
        setError(response.msg);
        console.error("Sign-up failed:", response.msg);
      }
    } catch (error) {
      setError(error.msg);
      console.error("Error during sign-up:", error);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      {/* <h2 className="mb-4">Make the most of your professional life</h2> */}

      <div className="container shadow-lg p-4 mt-1 bg-white rounded d-flex flex-column justify-content-center align-items-center">
        <div className="text-center mb-4">
          {/* <img src="logo.png" alt="Logo" className="logo" /> */}
          <h3>Sign Up</h3>
        </div>

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={signUp}
          autoComplete="off"
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please input your Full Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input a valid email address!",
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

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className="submit-button">
              Sign Up
            </Button>
          </Form.Item>

          {error && <Typography className="error">{error}</Typography>}

          <div className="text-center-create-account">
            <span>Already On LinkedIn?</span> <Link to="/Login">Login</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
