import Express from "express";
import { signUp, login } from "../controller/user-controller.js";
import { uploadPost, getAllPosts } from "../controller/post-controller.js";
import bodyParser from "body-parser";
import authenticateToken from "../controller/jwt-controller.js";
import getNotification from "../controller/notification-controller.js";


const router = Express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));




router.post("/signUp", signUp);
router.post("/login", login);
// router.post("/logout", logout);
router.post("/uploadPost", authenticateToken, uploadPost);
router.get("/posts", authenticateToken, getAllPosts);
router.get("/notification", authenticateToken, getNotification);


export default router;
