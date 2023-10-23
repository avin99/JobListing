const express = require('express');
const router = express.Router();
const Job = require('../models/jobModel');

// Apply for a job
router.post('/apply/:jobId', async (req, res) => {
  try {
    const { name, email } = req.body;
    const jobId = req.params.jobId;

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    // Add the applicant to the job's applicants array
    job.applicants.push({ name, email });
    await job.save();

    // Return the updated job listing
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
