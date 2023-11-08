const mongoose = require('mongoose')



const connect = async (uri) =>{
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log("database connected successfully")
    }
    catch(err){
        console.log("error while connecting to database : ", err)
    }
}


module.exports = connect

// export default connect