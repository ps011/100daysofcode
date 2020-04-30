const mongoose = require('mongoose');
const url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds125341.mlab.com:25341/100daysofcode`;

module.exports = {

    connectToServer: async () => {
        try {
             return Promise.resolve(mongoose.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true }));
        } catch (err) {
            return Promise.reject(err);
        }
    },
    getMongoose: () => {
        return mongoose;
    }
};
