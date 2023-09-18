// Home.js
import React from "react";
import { Link } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";


import Posts from "../Components/Posts/posts.jsx";

const Home = () => {
  return (
    <div style={styles.container}>
      <div className='shadow' style={styles.buttonContainer}>
        <div style={styles.buttonWrapper}>
          <Tooltip title="Start a post">
            <Link to="createPost">
              <Button type="dashed" shape="round" icon={<PlusCircleOutlined />} style={styles.button}>
                Start a post
              </Button>
            </Link>
          </Tooltip>
        </div>
      </div>

      {/* Rest of your content */}
      <div style={styles.content}>
        <Posts />
      </div>
    </div>
  );
};

export default Home;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px",
    background: "#f7f7f7"
  },
  buttonContainer: {
    width: "",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    background: "#f0f0f0",
    padding: "10px",
    borderRadius: "8px",
    width: "700px",
  },
  button: {
    width: "660px",
    alignItems: "flex-star",
    height: "45px"
  },
  content: {
    textAlign: "center",
    paddingTop: "20px",
  },
};
