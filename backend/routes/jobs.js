const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Get a list of all job listings
router.get('/jobs', jobController.getAllJobs);

// Get details of a specific job by ID
router.get('/jobs/:jobId', jobController.getJobById);

// Create a new job listing
router.post('/jobs', jobController.createJob);

// Update a job listing by ID
router.put('/jobs/:jobId', jobController.updateJob);

// Delete a job listing by ID
router.delete('/jobs/:jobId', jobController.deleteJob);

module.exports = router;
