import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import API from "../api/api.js";


const Navbar = ({ user }) => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {

        console.log("Fetching notifications for user " + user.fullName);
        const res = await API.getNotification();
        console.log("Fetched all Notifications: ", res.data);
        if (res.isSuccess) {
          setNotifications(res.data.reverse());
          const unreadNotifications = res.data.filter(
            (notification) => !notification.isRead
          );
          setUnreadCount(unreadNotifications.length);
        }
      } catch (error) {
        console.error("Error fetching notifications: ", error);
      }
    };
    fetchNotifications();
  }, []);

  // const markNotificationsAsRead = async () => {
  //   try {
  //     // Assuming you have an API call to mark notifications as read
  //     await API.markNotificationsAsRead();
  //     setUnreadCount(0); // Reset unread count to zero after marking as read
  //   } catch (error) {
  //     console.error("Error marking notifications as read: ", error);
  //   }
  // };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ms-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          LinkedIn
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/notifications" className="nav-link notification-btn"
              // onClick={() => markNotificationsAsRead()}
              >
                Notification {unreadCount > 0 && <span>({unreadCount})</span>}

              </Link>
              {/* You can show the dropdown/modal with the list of notifications here */}
            </li>
          </ul>
          <div className="ms-3">{user.fullName}</div>
          <div className="ms-3">|</div>
          <div className="ms-3">
            <Link className="nav-link login-link" to="/Login">
              Log out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
