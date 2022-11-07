const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
    };
    try {
        mongoose.connect("mongodb+srv://admin:admin1234@cluster0.jivsgsq.mongodb.net/form?retryWrites=true&w=majority",
            connectionParams);
        console.log('Connection is Established');
    } catch (error) {
        console.log('Error: ', err);
    }
}