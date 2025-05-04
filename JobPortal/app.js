const jobs = [
    { id: 1, title: 'Frontend Developer', description: 'Build UI with HTML/CSS/JS.', location: 'New York' },
    { id: 2, title: 'Backend Developer', description: 'Work with Node.js and databases.', location: 'Remote' },
    { id: 3, title: 'Full Stack Engineer', description: 'Create full web apps with MERN.', location: 'San Francisco' },
    { id: 4, title: 'UI/UX Designer', description: 'Design intuitive interfaces.', location: 'Remote' },
    { id: 5, title: 'QA Engineer', description: 'Ensure product quality through testing.', location: 'New York' },
    { id: 6, title: 'DevOps Engineer', description: 'Manage cloud deployments and CI/CD.', location: 'San Francisco' },
    { id: 7, title: 'Product Manager', description: 'Lead product vision and execution.', location: 'Remote' },
    { id: 8, title: 'Marketing Specialist', description: 'Create and manage campaigns.', location: 'New York' },
    { id: 9, title: 'Data Analyst', description: 'Analyze and interpret data trends.', location: 'San Francisco' },
    { id: 10, title: 'Technical Writer', description: 'Document software and APIs.', location: 'Remote' },
    { id: 11, title: 'Graphic Designer', description: 'Design visuals for web and print.', location: 'Chicago' },
    { id: 12, title: 'Cybersecurity Analyst', description: 'Monitor and secure networks.', location: 'Remote' },
    { id: 13, title: 'iOS Developer', description: 'Build iOS mobile applications.', location: 'New York' },
    { id: 14, title: 'Android Developer', description: 'Develop Android apps with Kotlin.', location: 'San Francisco' },
    { id: 15, title: 'AI/ML Engineer', description: 'Implement machine learning models.', location: 'Remote' },
    { id: 16, title: 'Technical Recruiter', description: 'Hire top tech talent.', location: 'Chicago' },
    { id: 17, title: 'Sales Manager', description: 'Lead a high-performing sales team.', location: 'Boston' },
    { id: 18, title: 'Business Analyst', description: 'Bridge business and tech goals.', location: 'Remote' },
    { id: 19, title: 'System Administrator', description: 'Maintain and configure IT systems.', location: 'San Francisco' },
    { id: 20, title: 'Customer Support Specialist', description: 'Support users via chat/email.', location: 'Remote' }
  ];
  
  function renderJobs(filteredJobs) {
    const container = document.getElementById('jobListings');
    container.innerHTML = '';
    filteredJobs.forEach(job => {
      const jobHTML = `
        <div class="col-md-4">
          <div class="job-card">
            <h5>${job.title}</h5>
            <p>${job.description}</p>
            <span class="badge bg-secondary">${job.location}</span>
            <br>
            <a href="apply.html?job=${encodeURIComponent(job.title)}" class="btn btn-sm btn-primary mt-2">Apply Now</a>
          </div>
        </div>`;
      container.innerHTML += jobHTML;
    });
  }
  
  function filterJobs() {
    const keyword = document.getElementById('searchKeyword').value.toLowerCase();
    const location = document.getElementById('filterLocation').value;
    const filtered = jobs.filter(job => {
      return (
        job.title.toLowerCase().includes(keyword) &&
        (location === '' || job.location === location)
      );
    });
    renderJobs(filtered);
  }
  
  document.addEventListener('DOMContentLoaded', () => renderJobs(jobs));
  