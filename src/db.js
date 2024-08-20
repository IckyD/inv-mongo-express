var DATABASE = process.env.DATABASE;
const mongoose = require('mongoose');

const connectDatabase = async () => {
    await mongoose.connect(DATABASE)
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
}

module.exports = connectDatabase;