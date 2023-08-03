import Post from "../model/post.model.js";




export const uploadPost = async (req, res) => {

    console.log('uploadPost: ', req.body);

    try {
        const text = req.body.text;
        console.log('text: ', text)


        const user = req.user;

        console.log('user: @@', user);

        const newPost = new Post({
            text: text,
            userID: user._id,
            userName: user.fullName,
            createdDate: new Date()
        });


        console.log('newPost: ', newPost);


        newPost.save();
        return res.status(200).json({ msg: "Post uplaoded successfully" });

    } catch (error) {
        return res.status(500).json({ msg: "Error uploading post", error });
    };



}
