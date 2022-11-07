const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
    };
    try {
        mongoose.connect(process.env.DB,
            connectionParams);
        console.log('Connection is Established');
    } catch (error) {
        console.log('Error: ', err);
    }
};