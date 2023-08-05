import Post from "../model/post.model.js";
import User from "../model/user.model.js";
import Notification from "../model/notification.model.js";

export const uploadPost = async (req, res) => {
    console.log('uploadPost: ----------------------', req.body);

    try {
        const text = req.body.text;
        console.log('text: ', text);

        const user = req.user;
        console.log('user: ', user);

        const newPost = new Post({
            text: text,
            userID: user._id,
            userName: user.fullName,
            createdDate: new Date(),
        });

        console.log('newPost: ', newPost);

        // Save the new post
        await newPost.save();


        // Send notifications to all other users
        const allUsersExceptPoster = await User.find({ _id: { $ne: user._id } });

        // console.log('allUsers: ', allUsersExceptPoster);


        const postID = newPost._id;
        console.log('postID: ******* ', postID);

        const notifications = allUsersExceptPoster.map((recipientUser) => {
            return new Notification({
                posterName: user.fullName,
                recipientUserID: recipientUser._id,
                post: newPost,
            });
        });

        console.log('----------------------------------------------------------------');
        console.log('notifications: ', notifications);



        await Notification.insertMany(notifications);
        console.log("notification creaded successfully");

        return res.status(200).json({ msg: "Post uploaded successfully" });
    } catch (error) {
        return res.status(500).json({ msg: "Error uploading post", error });
    }
};



export const getAllPosts = async (req, res) => {
    console.log("So you're here to get all posts");
    try {

        let posts = await Post.find({});
        // console.log("All Posts: ", posts);
        return res.status(200).json(posts);
    } catch {
        console.log("Error getting posts");
        return res.status(500).json({ msg: error.message });
    }

}