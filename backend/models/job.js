// /backend/models/job.js

const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  applicants: [
    {
      name: String,
      email: String,
    },
  ],
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
