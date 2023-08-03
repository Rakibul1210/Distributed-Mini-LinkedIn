// Home.js
import React from "react";
import { Link } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, List, Tooltip } from "antd";

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
      <div style={styles.content}>
        <ol>
          <List> Post one</List>
          <List> Post two</List>
          <List> Post three</List>

        </ol>
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
    paddingTop: "20px"
  },
  buttonContainer: {
    width: "50%",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    background: "#f0f0f0",
    padding: "10px",
    borderRadius: "8px",
    width: "100%",
  },
  button: {
    width: "660px",
    height: "45px"
  },
  content: {
    textAlign: "center",
    paddingTop: "20px",
  },
};
