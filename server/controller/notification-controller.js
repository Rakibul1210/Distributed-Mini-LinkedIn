import Notification from "../model/notification.model.js";
import Post from "../model/post.model.js";


export const getNotification = async (req, res) => {

    let userId = req.user._id;

    try {

        let notifications = await Notification.find({ recipientUserID: userId, isRead: false });

        return res.status(200).json(notifications);

    } catch (e) {
        console.log("Eroor getting notifications: ", e);
        return res.status(500).json({ msg: e.message });
    }

}

export const notificationRead = async (req, res) => {
    // console.log("We are here to mark notifiaction as read: ", req.body);

    let notificationID = req.body.notificationID;
    console.log("Notification ID: ", notificationID);



    try {

        const notification = await Notification.findById(notificationID);

        if (!notification) {
            return res.status(404).json({ msg: "Notification not found" });
        }

        notification.isRead = true;

        await notification.save();
        console.log("Notification marked as read: ", notification);

        return res.status(200).json({ msg: "Notificartion mark as read" });

    } catch (e) {
        return res.status(500).json({ msg: e.message });

    }

}


export const getNotifiedPost = async (req, res) => {
    const notification = req.query;
    console.log("notification : ", notification);
    const postId = notification.post;


    try {
        const post = await Post.findById(postId);
        console.log(post);
        // const imageBuffer = post.imageId ? await getImageFromMinio(post.imageId) : null;
        // const base64String = imageBuffer ? imageBuffer.toString('base64') : null;
        // const mimeType = 'image/jpeg';
        // const image = base64String ? data:${mimeType};base64,${base64String} : null;



        res.status(200).json(post)
    }
    catch (err) {
        res.json({ message: "error getting post", err })
        console.error("Error getting post : " + err)
    }
}