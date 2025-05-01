const express = require('express');
const router = express.Router();
const facultyController = require('../controllers/facultyController');

router.get('/', facultyController.getAllFacultyMembers);

router.post('/', facultyController.addFacultyMember);

router.delete('/:id', facultyController.deleteFacultyMember);

router.patch('/:id', facultyController.updateFacultyMember);


module.exports = router;