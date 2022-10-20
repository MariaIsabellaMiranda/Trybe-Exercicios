import 'dotenv/config';
import mongoose from 'mongoose';

const mongoDatabaseURI: string = process.env.MONGO_URI
  || 'mongodb://root:example@localhost:27017/glassesStore?authSource=admin';

const connectToDatabase = () => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;