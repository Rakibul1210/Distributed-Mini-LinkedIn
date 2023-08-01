// Home.js
import React from "react";
import { Link } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
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
      <div style={styles.content}>Posts will be shown here</div>
    </div>
  );
};

export default Home;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px"
  },
  buttonContainer: {
    width: "60%",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    background: "#f0f0f0", // Add a background color for the container if desired
    padding: "10px",
    borderRadius: "8px",
    width: "100%", // Make the button wrapper take full width
  },
  button: {
    // No need to set width here, button will inherit its parent's width (buttonWrapper)
    width: "860px",
    height: "45px"
  },
  content: {
    textAlign: "center",
    paddingTop: "20px",
  },
};
