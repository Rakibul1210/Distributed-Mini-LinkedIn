import Express from "express";
import { signUp, login } from "../controller/user-controller.js";
import { uploadPost } from "../controller/post-controller.js";
import bodyParser from "body-parser";
import { Route } from "react-router-dom";
import authenticateToken from "../controller/jwt-controller.js";


const router = Express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));




router.post("/signUp", signUp);
router.post("/login", login);
// router.post("/logout", logout);
router.post("/uploadPost", authenticateToken, uploadPost);

export default router;
