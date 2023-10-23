const Job = require('../models/job');

// Controller function to retrieve a list of all job listings
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().exec(); // Use .exec() to execute the query
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching job listings' });
  }
};

// Controller function to retrieve details of a specific job by ID
exports.getJobById = async (req, res) => {
  const jobId = req.params.jobId;
  try {
    const job = await Job.findById(jobId).exec(); // Use .exec() to execute the query
    if (!job) {
      res.status(404).json({ error: 'Job not found' });
    } else {
      res.json(job);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error fetching job details' });
  }
};

// Controller function to create a new job listing
exports.createJob = async (req, res) => {
  const { title, description, company } = req.body;
  try {
    const newJob = new Job({ title, description, company });
    const job = await newJob.save();
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: 'Error creating a new job listing' });
  }
};

// Controller function to update a job listing by ID
exports.updateJob = async (req, res) => {
  const jobId = req.params.jobId;
  const { title, description, company } = req.body;
  try {
    const job = await Job.findByIdAndUpdate(jobId, { title, description, company }, { new: true }).exec();
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: 'Error updating the job listing' });
  }
};

// Controller function to delete a job listing by ID
exports.deleteJob = async (req, res) => {
  const jobId = req.params.jobId;
  try {
    await Job.findByIdAndDelete(jobId).exec();
    res.json({ message: 'Job deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting the job listing' });
  }
};
