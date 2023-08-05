import React, { useState, useEffect } from 'react';
import API from "../../api/api.js";
import Notifiaction from './notifiaction.jsx';
// import { notification } from 'antd';


const Notifications = ({ user }) => {



    const [notifications, setNotifications] = useState([]);
    // const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {

                console.log("Fetching notifications for user from notifiaction page " + user.fullName);
                const res = await API.getNotification();
                console.log("Fetched all Notifications: ", res.data);
                if (res.isSuccess) {
                    setNotifications(res.data.reverse());
                    // const unreadNotifications = res.data.filter(
                    //     (notification) => !notification.isRead
                    // );
                    // setUnreadCount(unreadNotifications.length);
                }
                console.log("Okay here at notifiactions page");
            } catch (error) {
                console.error("Error fetching notifications: ", error);
            }
        };
        fetchNotifications();
    }, []);



    return (
        <>

            {notifications && notifications.length > 0 ? notifications.map(notification => (
                <Notifiaction key={notification._id} notification={notification} />
            )) : <div>No post to show</div>
            }
        </>


    )
};


export default Notifications;
