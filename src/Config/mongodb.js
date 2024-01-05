import mongoose from 'mongoose';

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/db');
        console.log('Connected to MongoDB: UserDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        // Close connection on error
        mongoose.connection.close();
    }
}

connectToDatabase();

export default mongoose;