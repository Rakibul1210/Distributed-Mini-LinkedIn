import express from "express";
import connection from "/home/rakibul/6thSemester/DistributedSystem/linked-in/server/database/db.js";
import bodyParser from "body-parser";
import router from "/home/rakibul/6thSemester/DistributedSystem/linked-in/server/routes/routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use("/", router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 8000;

app.post("./");

const uri = "mongodb://localhost:27017/linked-in";

connection(uri);

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
