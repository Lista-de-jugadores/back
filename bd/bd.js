const mongoose = require('mongoose');
const mongo_uri = 'mongodb+srv://creditu-assessment:ZsnF72CcRkC7TKoV@creditu-assessment.xavvj.mongodb.net/assessment';

const db_connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://creditu-assessment:ZsnF72CcRkC7TKoV@creditu-assessment.xavvj.mongodb.net/assessment")
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = { db_connect }