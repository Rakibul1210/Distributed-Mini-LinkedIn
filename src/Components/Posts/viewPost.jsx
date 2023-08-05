import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { formatDistanceToNow } from 'date-fns';
import { useLocation } from 'react-router-dom';
import { getAccessToken } from '../../Token/token';
import axios from 'axios';

export const ViewPost = () => {

    const [post, setPost] = useState({});
    const location = useLocation();
    const notification = location.state?.notification;
    console.log("location: " + location)
    console.log("notification:", notification);

    useEffect(() => {
        axios.get('http://localhost:8000/getNotifiedPost', {
            params: notification,
            headers: {
                Authorization: `Bearer ${getAccessToken()}`
            }
        })
            .then((res) => {
                console.log("API response:", res.data); // Check the response data
                setPost(res.data);
            })
            .catch((error) => {
                console.log("error: ", error);
            });
    }, [notification]);


    // const post = notification.post;
    // console.log("VIEW POST--- in post ", post);




    // const timeAgo = formatDistanceToNow(new Date(post.createdDate), { addSuffix: true });
    const timeAgo = post.createdDate
        ? formatDistanceToNow(new Date(post.createdDate), { addSuffix: true })
        : "Loading..."; // Replace this with a suitable loading message or leave it blank.


    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
            <Card title={post.userName} size="small" style={{ width: '50%', textAlign: 'left' }}>
                <p>{post.text}</p>
                <div style={{ marginTop: '10px', color: '#888' }}>
                    {timeAgo}
                </div>
            </Card>
        </div>
    );
};

export default ViewPost;
