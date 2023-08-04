import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({

    text: {
        type: String,
        required: true
    },
    // picture: {
    //     type: String,
    //     required: false
    // },
    userID: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true
    }
});


const post = mongoose.model('post', PostSchema);

export default post;