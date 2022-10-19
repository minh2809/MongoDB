const mongoose = require("mongoose");
const URI =
  "mongodb+srv://nnmd28:minh2809@cluster0.21sucz7.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected");
};

module.exports = connectDB;
