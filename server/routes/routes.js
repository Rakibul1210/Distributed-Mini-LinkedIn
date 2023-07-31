import Express from "express";
import { signUp, login } from "../controller/user-controller.js";
import bodyParser from "body-parser";
import { Route } from "react-router-dom";

const router = Express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/signUp", signUp);
router.post("/login", login);

export default router;
