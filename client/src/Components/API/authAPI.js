import axios from "axios";

const authAPI  = axios.create({
    baseURL : `http://localhost:${process.env.REACT_APP_authPort}/user`,
    headers: {
        'Content-Type': 'application/json',
      },
})

export default authAPI