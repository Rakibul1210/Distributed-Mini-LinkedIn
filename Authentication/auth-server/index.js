const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
const userRouter = require('./user-router/userRoutes.js');
const connectDb = require('./database/db.js')
dotenv.config();

const port = process.env.PORT
const uri = process.env.DB_URI

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    res.send("User handler server")
})

app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
connectDb(uri)


  