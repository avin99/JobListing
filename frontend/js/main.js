// Define your API endpoint URLs
const jobApiUrl = '/api/jobs';
const applicantApiUrl = '/api/applicants';

// Function to fetch and display job listings
const fetchJobListings = async () => {
  try {
    const response = await fetch(jobApiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const jobListings = document.getElementById('jobListings');
    jobListings.innerHTML = '';

    data.forEach((job) => {
      const jobElement = document.createElement('div');
      jobElement.innerHTML = `<h3>${job.title}</h3>
        <p>${job.description}</p>
        <p>Company: ${job.company}</p>`;
      jobListings.appendChild(jobElement);
    });
  } catch (error) {
    console.error('Error fetching job listings:', error);
  }
};

// Function to fetch and display applicant profiles
const fetchApplicantProfiles = async () => {
  try {
    const response = await fetch(applicantApiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const applicantProfiles = document.getElementById('applicantProfiles');
    applicantProfiles.innerHTML = '';

    data.forEach((applicant) => {
      const applicantElement = document.createElement('div');
      applicantElement.innerHTML = `<h3>${applicant.name}</h3>
        <p>Email: ${applicant.email}</p>`;
      applicantProfiles.appendChild(applicantElement);
    });
  } catch (error) {
    console.error('Error fetching applicant profiles:', error);
  }
};

// Call the functions to fetch and display data
fetchJobListings();
fetchApplicantProfiles();
