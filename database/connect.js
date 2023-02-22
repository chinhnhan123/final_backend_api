var mongoose = require("mongoose");
const connectDatabase = async () => {
  try {
    // connect mongoose
    var mongoDB =
      "mongodb+srv://nhanchinh113:Abc123@cluster0.fs3bvwp.mongodb.net/FINAL-PROJECT-API?retryWrites=true&w=majority";
    mongoose.set("strictQuery", false);
    const value = await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (value) console.log("Connect database ok");
  } catch (error) {
    console.log(error);
  }
};

const DisconnnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnect database ok");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDatabase, DisconnnectDB };
