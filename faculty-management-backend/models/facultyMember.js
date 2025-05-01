const mongoose = require('mongoose');

const facultyMemberSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    exp: Number,
    type: String,
    qualification: String
});

module.exports = mongoose.model('FacultyMember', facultyMemberSchema);