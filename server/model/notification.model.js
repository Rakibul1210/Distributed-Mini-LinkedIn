import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    posterName: {
        type: String,
        required: true
    },
    recipientUserID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
});

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;
