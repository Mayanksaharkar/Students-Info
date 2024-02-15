const mongoose = require('mongoose')
const connectToMongo = () => {
    mongoose.connect("mongodb://localhost:27017/Studentdb?directConnection=true")
    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected successfully');
    });
    mongoose.connection.on('error', (err) => {
        console.error(`MongoDB connection error: ${err}`);
    });
}
module.exports = connectToMongo;