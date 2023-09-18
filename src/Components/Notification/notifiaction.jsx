import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Checkbox } from 'antd';
import { formatDistanceToNow } from 'date-fns';


import API from "../../api/api.js";

export const Notifiaction = ({ notification }) => {

    const post = notification.post;
    const navigate = useNavigate();
    const timeAgo = formatDistanceToNow(new Date(notification.createdDate), { addSuffix: true });


    const viewPost = (notification) => {
        console.log("We are at view post: ", notification);
        navigate('/viewPost', { state: { notification } });
    }



    const notificationRead = async () => {

        console.log("notificationRead function--------------------------------");



        try {
            let res = await API.notificationRead({ notificationID: notification._id });
            console.log("nofication mark as read. req.isSuccess", res.isSuccess);


        } catch (e) {
            console.log("Eroor occured while notificationRead: ", e.message);
        }

        // You can perform any other actions related to marking the notification as read here
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
            <div style={{ width: '50%', textAlign: 'left' }}>
                <Card className='shadow-lg' size="small" style={{ textAlign: 'left' }}>
                    <p>
                        <Checkbox onChange={notificationRead} />
                        <div onClick={() => {
                            viewPost(notification)
                            notificationRead()
                        }
                        } style={{ textDecoration: 'none', color: 'inherit' }}  >
                            <strong>{notification.posterName}</strong> posted a new post {notification.post.text}
                        </div>
                    </p>
                    <div style={{ marginTop: '10px', color: '#888' }}>
                        {timeAgo}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Notifiaction;
