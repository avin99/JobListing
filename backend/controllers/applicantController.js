const Applicant = require('../models/applicant');

// Controller function to retrieve a list of all applicants
exports.getAllApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.find().exec();
    res.json(applicants);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching applicants' });
  }
};

// Controller function to retrieve details of a specific applicant by ID
exports.getApplicantById = async (req, res) => {
  const applicantId = req.params.applicantId;
  try {
    const applicant = await Applicant.findById(applicantId).exec();
    if (!applicant) {
      res.status(404).json({ error: 'Applicant not found' });
    } else {
      res.json(applicant);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error fetching applicant details' });
  }
};

// Controller function to create a new applicant profile
exports.createApplicant = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newApplicant = new Applicant({ name, email });
    const applicant = await newApplicant.save();
    res.json(applicant);
  } catch (err) {
    res.status(500).json({ error: 'Error creating a new applicant profile' });
  }
};

// Controller function to update an applicant profile by ID
exports.updateApplicant = async (req, res) => {
  const applicantId = req.params.applicantId;
  const { name, email } = req.body;
  try {
    const applicant = await Applicant.findByIdAndUpdate(applicantId, { name, email }, { new: true }).exec();
    res.json(applicant);
  } catch (err) {
    res.status(500).json({ error: 'Error updating the applicant profile' });
  }
};

// Controller function to delete an applicant profile by ID
exports.deleteApplicant = async (req, res) => {
  const applicantId = req.params.applicantId;
  try {
    await Applicant.findByIdAndDelete(applicantId).exec();
    res.json({ message: 'Applicant deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting the applicant profile' });
  }
};
