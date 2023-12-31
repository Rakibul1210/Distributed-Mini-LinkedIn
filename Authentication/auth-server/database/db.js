const mongoose = require('mongoose')

// const connect = async (uri) =>{
//     // const uri = 'mongodb://localhost:27017/linkedin-user';
//     try{
//         await mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//           });
//           console.log("database connected successfully")
//     }
//     catch(err){
//         console.log("error while connecting to database : ", err)
//     }
// }

const connect = async (uri) => {
    mongoose.connect('mongodb://user_db:27017/user_db', { useNewUrlParser: true, useUnifiedTopology: true, directConnection: true });
    const db = mongoose.connection;

    db.on('error', (err) => {
        console.log(err);
    })

    db.once('open', () => {
        console.log('Connected to user database!');
    })
}



module.exports = connect
