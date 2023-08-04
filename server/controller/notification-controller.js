import Notification from "../model/notification.model.js";


const getNotification = async (req, res) => {

    let userId = req.user._id;

    try {

        let notifications = await Notification.find({ recipientUserID: userId, isRead: false });

        return res.status(200).json(notifications);

    } catch (e) {
        console.log("Eroor getting notifications: ", e);
        return res.status(500).json({ msg: e.message });
    }




}

export default getNotification;
