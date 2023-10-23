// Define your API endpoint URL for job listings
const jobApiUrl = '/api/jobs';

// Function to fetch and display job listings

const fetchJobListings = async () => {
  try {
    const response = await fetch(jobApiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const jobListings = document.getElementById('jobListings');

    data.forEach((job) => {
      const jobElement = document.createElement('div');
      jobElement.innerHTML = `
        <div class="card mb-3 job-listing">
          <div class="card-body">
            <h5 class="card-title">${job.title}</h5>
          </div>
        </div>
      `;

      // Attach click event to show job details and add the "Apply" button
      jobElement.addEventListener('click', () => {
        document.getElementById('jobDetailsModalLabel').textContent = job.title;
        document.getElementById('jobDetailsDescription').textContent = job.description;
        document.getElementById('jobDetailsCompany').textContent = `Company: ${job.company}`;

        // Check if the "Apply" button has already been added
        if (!document.querySelector('.modal-body button')) {
          // Create the "Apply" button and add it to the modal
          const applyButton = document.createElement('button');
          applyButton.textContent = 'Apply for this Job';
          applyButton.addEventListener('click', () => {
            // Implement the logic to open an application form or modal
            // Collect applicant's name, email, and other details
            
            // After collecting the information, send a POST request to apply for the job
            // You can use the `/api/apply` endpoint and provide the job ID and applicant details
          });

          const modalBody = document.querySelector('.modal-body');
          modalBody.appendChild(applyButton);
        }

        $('#jobDetailsModal').modal('show'); // Show the Bootstrap modal
      });

      jobListings.appendChild(jobElement);
    });
  } catch (error) {
    console.error('Error fetching job listings:', error);
  }
};

// Call the function to fetch and display job listings
fetchJobListings();
