const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicantController');

// Get a list of all applicants
router.get('/applicants', applicantController.getAllApplicants);

// Get details of a specific applicant by ID
router.get('/applicants/:applicantId', applicantController.getApplicantById);

// Create a new applicant profile
router.post('/applicants', applicantController.createApplicant);

// Update an applicant profile by ID
router.put('/applicants/:applicantId', applicantController.updateApplicant);

// Delete an applicant profile by ID
router.delete('/applicants/:applicantId', applicantController.deleteApplicant);

module.exports = router;
