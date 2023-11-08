import { notification } from "antd";
import axios from "axios";

const notficationAPI  = axios.create({
    baseURL : `http://localhost:${process.env.REACT_APP_notificationPort}/notification`,
    headers: {
        'Content-Type': 'application/json',
      },
})

export default notficationAPI