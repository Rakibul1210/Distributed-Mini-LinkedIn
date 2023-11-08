import axios from "axios";

const postAPI  = axios.create({
    baseURL : `http://localhost:${process.env.REACT_APP_postPort}/posts`,
    headers: {
        'Content-Type': 'application/json',
      },
})

export default postAPI