import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDb connected !!!`);
  } catch (error) {
    console.log(`Error`, error);
    process.exit(1);
  }
};

export default { connect };
