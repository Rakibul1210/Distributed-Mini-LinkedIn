import Express from "express";
import { signUp, login } from "../controller/user-controller.js";
import { uploadPost, getAllPosts } from "../controller/post-controller.js";
import bodyParser from "body-parser";
import authenticateToken from "../controller/jwt-controller.js";
import { getNotification, notificationRead, getNotifiedPost } from "../controller/notification-controller.js";
import path from 'path';
import multer from 'multer';

const router = Express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));



// const path = require('path');
// const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file)
        // console.log("original name : ", file.originalname)
        cb(null, './public/images')
    },
    filename: (req, file, cb) => {
        const newFilename = Date.now() + path.extname(file.originalname);
        // console.log('filename : ', newFilename)
        cb(null, newFilename)
    },

})

const upload = multer({ storage: storage })




router.post("/signUp", signUp);
router.post("/login", login);
// router.post("/logout", logout);
router.post("/uploadPost", authenticateToken, uploadPost);
// router.post("/uploadPost", authenticateToken, upload.single('image'), uploadPost);

router.get("/posts", authenticateToken, getAllPosts);
router.get("/notification", authenticateToken, getNotification);
router.put("/notificationRead", authenticateToken, notificationRead);
router.get("/getNotifiedPost", getNotifiedPost);

export default router;
