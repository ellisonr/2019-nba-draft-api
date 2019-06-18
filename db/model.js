const mongoose = require('./connection')

const nbaProspectSchema = new mongoose.Schema({
    name: String,
    age: Number,
    college: String
})

const nbaProspect = mongoose.model('nbaProspect', nbaProspectSchema);

module.exports = nbaProspect;

