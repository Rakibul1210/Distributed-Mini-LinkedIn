import User from "/home/rakibul/6thSemester/DistributedSystem/linked-in/server/model/user.model.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Token from "../model/token.js";

dotenv.config();

export const signUp = async (req, res) => {
  try {
    console.log(req.body);

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    console.log("We are here with data", req.body);

    const newUser = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashedPassword,
    });

    console.log("Gonna create this user: ", newUser);

    await newUser.save();
    res.json({ msg: "user created successfully" });
    console.log("user created successfully");
  } catch (err) {
    console.log("error creating user");
    return res.json({ msg: "error creating user" });
  }
};

export const login = async (req, res) => {
  console.log(" in login with", req.body);
  const email = req.body.email;

  const user = await User.findOne({ email: email });
  console.log(user);
  if (!user) {
    console.log("user not registered");
    return res.status(404).json({ msg: "User not registered" });
  }

  try {
    let match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      const accessToken = jwt.sign(
        user.toJSON(),
        process.env.ACCESS_SECRET_KEY,
        { expiresIn: "15m" }
      );
      const refreshToken = jwt.sign(
        user.toJSON(),
        process.env.REFRESH_SECRET_KEY
      );

      const newToken = new Token({
        token: refreshToken,
        refreshToken: refreshToken,
        fullName: user.fullName,
      });
      await newToken.save();

      console.log("User logged in successfully");
      return res.status(200).json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        fullName: user.fullName,
      });
    } else {
      console.log("Invalid password");
      return res.status(404).json({ msg: "Invalid password" });
    }
  } catch (err) {
    console.log("Something went wrong: ", err);
  }
};

export const logoutUser = async (request, response) => {
  const token = request.body.token;
  await Token.deleteOne({ token: token });

  response.status(204).json({ msg: "logout successfull" });
};
