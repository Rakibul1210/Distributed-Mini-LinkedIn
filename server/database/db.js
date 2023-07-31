import mongoose from "mongoose";

const connection = async (uri) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database ");
  } catch (error) {
    console.log("error whuile connecting to mongodb", error);
  }
};

export default connection;
