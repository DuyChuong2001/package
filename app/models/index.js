const mongoose = require("mongoose");
const createrContactModel = require("./contact.model");

const db = {};
db.mongoose = mongoose;
db.Contact = createrContactModel(mongoose);

module.exports = db;