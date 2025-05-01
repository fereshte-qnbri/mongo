const FacultyMember = require('../models/facultyMember');

const getAllFacultyMembers = async (req, res) => {
    try {
        const facultyMembers = await FacultyMember.find();
        res.json(facultyMembers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addFacultyMember = async (req, res) => {
    const facultyMember = new FacultyMember({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        exp: req.body.exp,
        type: req.body.type,
        qualification: req.body.qualification
    });

    try {
        const newFacultyMember = await facultyMember.save();
        res.status(201).json(newFacultyMember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteFacultyMember = async (req, res) => {
    try {
        const facultyMember = await FacultyMember.findByIdAndDelete(req.params.id);
        if (!facultyMember) {
            return res.status(404).json({ message: 'Faculty member not found' });
        }
        res.json({ message: 'Faculty member deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllFacultyMembers,
    addFacultyMember,
    deleteFacultyMember
};


const updateFacultyMember = async (req, res) => {
    try {
        const facultyMember = await FacultyMember.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } // 'new: true' returns the updated document, 'runValidators' ensures schema validation
        );
        if (!facultyMember) {
            return res.status(404).json({ message: 'Faculty member not found' });
        }
        res.json(facultyMember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllFacultyMembers,
    addFacultyMember,
    deleteFacultyMember,
    updateFacultyMember 
};