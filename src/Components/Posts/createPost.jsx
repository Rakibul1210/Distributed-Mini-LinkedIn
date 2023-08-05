import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import './createPost.css';
import API from "../../api/api.js";
import { useNavigate } from 'react-router-dom';
import { Upload } from 'antd';
import { PictureTwoTone } from "@ant-design/icons";

const CreatePost = ({ userName }) => {

  const navigate = useNavigate();
  const [image, setImage] = useState();

  // const handleImageChange = (e) => {
  //   setImage(e.target.files[0]);
  // }

  const handleImageChange = (file) => {
    setImage(file);
  };




  const uploadPost = async (values) => {
    console.log('Uploading');
    console.log(values);

    const text = values.textArea;
    // const formData = new FormData();
    // formData.append('text', text);
    // formData.append('image', image);

    // console.log("sending requast", text);
    // let res = await API.uploadPost({ formData: formData });
    let res = await API.uploadPost({ text: text });

    console.log("res from uploadPost", res.data.msg);

    if (res.isSuccess) {
      navigate("/");
    }
    else {
      console.log("Upload failed");
    }

  }


  return (
    <div className='centered-container'>
      <div>{userName}</div>

      <div className='form-container'>
        <Form onFinish={uploadPost}>
          <Form.Item name='textArea'>
            <Input.TextArea rows={6} />
          </Form.Item>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item name='upload' valuePropName='fileList' getValueFromEvent={(e) => e.fileList}>
              {/* <Upload
                listType="picture"
                className="upload-list-inline"
                type="file"
                name="image"
                onChange={handleImageChange}

              >
                <Button icon={<PictureTwoTone />}>Upload Picture</Button>
              </Upload> */}
              <Upload
                listType="picture"
                className="upload-list-inline"
                showUploadList={false}
                beforeUpload={() => false}
                onChange={(info) => {
                  if (info.file.status === "done") {
                    handleImageChange(info.file.originFileObj);
                  }
                }}
              >
                <Button icon={<PictureTwoTone />}>Upload Picture</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Post
              </Button>
            </Form.Item>
          </div>
        </Form>

      </div>
    </div>
  );
};

export default CreatePost;
