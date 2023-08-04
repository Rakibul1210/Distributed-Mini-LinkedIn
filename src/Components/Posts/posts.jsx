import React, { useEffect, useState } from 'react';
import API from "../../api/api.js";
import Post from './post.jsx';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            let res = await API.getAllPosts();
            console.log("Fetched all posts: ", res.data);
            if (res.isSuccess) {
                setPosts(res.data.reverse());
            }

            // console.log("Posts: ", posts);
        }
        fetchPosts();
    }, []);


    return (
        <>

            {posts && posts.length > 0 ? posts.map(post => (
                <Post key={post._id} post={post} />
            )) : <div>No post to show</div>
            }
        </>
    )
}


export default Posts;