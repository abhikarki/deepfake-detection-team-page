import './App.css'

function App() {
  const teamMembers = [
    {
      name: "Shivansh Sawant",
      role: "ML Engineer / Backend Engineer",
      email: "shisawan@ttu.edu",
    },
    {
      name: "Abhimanyu Karki",
      role: "MLOps / Frontend",
      email: "abhi.karki@ttu.edu",
    },
    {
      name: "Tanush Arunprasad",
      role: "ML Engineer / Data Engineer",
      email: "tarunpra@ttu.edu",
    },
    {
      name: "Jesus Alarcon",
      role: "ML Engineer / Research",
      email: "jesalarc@ttu.edu",
    },
    {
      name: "Gabriel Sotelo",
      role: "Backend Engineer / Research",
      email: "gabrsote@ttu.edu",
    }
  ];

  const pastMeetings = [
    { date: "03/30/2026    2:00 PM - 4:00 PM    Library", title: "Practice Presentation & Model Training Preparation", summary: "Practice presentation, final dataset review, and task division for model training with cloud resource planning" },
    { date: "03/28/2026    2:00 PM - 3:00 PM    Library", title: "Practice Presentation & UML Diagram Review", summary: "Practice presentation and review of UML diagram modifications" },
    { date: "03/26/2026    5:00 PM - 6:00 PM    Zoom", title: "Practice Presentation & Dataset Preparation", summary: "Practice presentation and discussion on dataset sources and preparation scripts" },
    { date: "03/25/2026    2:00 PM - 4:00 PM    Library", title: "Practice Presentation & Model Output Review", summary: "Practice presentation and discussion on model output and performance benchmarks" },
    { date: "03/24/2026    2:00 PM - 3:00 PM    Library", title: "Model Evaluation & Presentation Practice", summary: "Evaluate model output accuracy and explainability details with presentation practice" },
    { date: "03/23/2026    4:00 PM - 5:00 PM    Library", title: "Inference Testing & Forensic Report", summary: "Run inference testing and discuss forensic report details and specifications" },

    { date: "03/22/2026    11:00 AM - 1:00 PM    Zoom", title: "Code Integration & UI Testing", summary: "Submit individual code to GitHub and integrate and test UI with logic validation" },

    { date: "03/21/2026    6:00 PM - 7:00 PM    Zoom", title: "Draft Presentation Slides", summary: "Draft Presentation Slides" },
    { date: "03/18/2026    3:00 PM - 3:30 PM    Zoom", title: "Grad-CAM Compatibility Discussion", summary: "Short discussion on comptibilitly of Grad-CAM with our architecture" },
    { date: "03/14/2026    2:00 PM - 3:00 PM    Zoom", title: "Model Alternatives & Dataset Discussion", summary: "Search for latest alternatives to EfficientNet and discuss on models and datasets" },
    { date: "03/12/2026    10:00 AM - 11:00 AM  Zoom", title: "UML Diagrams & Data Collection Planning", summary: "UML Diagrams Discussion and plan to find datasets" },
    { date: "03/10/2026    10:00 AM - 11:00 AM  Library Study Room", title: "Code & Report Review", summary: "Code and report review and discussion" },
    { date: "03/07/2026    2:00 PM - 3:00 PM    Library Study Room", title: "Progress Review & System Entity Design", summary: "Progress review, discussion on system entities, UML diagrams, and assign roles for report writing" },
    { date: "03/05/2026    4:00 PM - 5:00 PM    Zoom", title: "Model Selection & Data Collection Discussion", summary: "Discussion for latest models for feature extraction, data collection" },
    { date: "02/28/2026    2:00 PM - 3:00 PM    Library Study Room", title: "Final Edits & Report Submission", summary: "Final edits to report and all files to submit" },
    { date: "02/25/2026    11:00 AM - 12:00 PM   Library Study Room", title: "Report Writing Initiation", summary: "Discussed the structure of the Report and formatting" },
    { date: "02/19/2026    4:00 PM - 5:00 PM    Library Study Room", title: "Final Edits & Presentation Practice", summary: "Final Edits to Slides and Presentation Practice" },
    { date: "02/17/2026    5:00 PM - 6:00 PM    Library Study Room", title: "Slides & Technical Architecture Assignment", summary: "Worked on slides and assigned slides to each member" },
    { date: "02/12/2026    4:00 PM - 5:00 PM     Library Study Room", title: "System Architecture & Pipeline Design", summary: "Finalized the pipeline and created rough draft for the modules and architecture diagram" },
    { date: "02/09/2026    3:00 PM - 4:00 PM     Library Study Room", title: "Presentation Planning & Implementation Discussion", summary: "Planned the structure of presentation and content to include and further discussed the technical implementation" },
    { date: "02/06/2026    11:00 AM - 12:00 PM    Zoom", title: "Existing Prblems and Requirements Planning", summary: "Discussed existing limitations, documented functional and non functional requirements and scope for the system" },
    { date: "02/03/2026    2:00 PM - 3:00 PM     Library Study Room", title: "Literature Review & Dataset Evaluation", summary: "studied existing deepfake detection methods, reviewd FaceForencis++ dataset and ML models" },
    { date: "01/30/2026    3:00 PM - 4:00 PM   Library Study Room", title: "Project Overview & Feasibility", summary: "Brainstormed deepfake detection topic, discussed scope and feasibility" },


  ];

  const upcomingMeetings = [
        { date: "03/31/2026", time: "11:00 AM - 1:00 PM", location: "Zoom", agenda: "Review report and model training" },
        { date: "04/02/2026", time: "2:00 PM - 3:00 PM", location: "Library", agenda: "Review report, model training and testing and discuss on benchmarks" },
        { date: "04/03/2026", time: "5:00 PM - 6:00 PM", location: "Zoom", agenda: "Review report and model training and testing and discuss on benchmarks" },
      ];

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="university-badge">
            <span className="course-code">CS4366-001</span>
            <span className="university">Texas Tech University</span>
          </div>
          <h1 className="project-title">Deepfake Detection</h1>
          <p className="project-subtitle">An Artifact Based Approach</p>
          <div className="group-info">
            <span className="group-badge">Group 9</span>
            <span className="professor">Professor Victor Sheng</span>
          </div>
        </div>
      </header>

      <section className="section team-section">
        <div className="container">
          <h2>Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                <p className="bio">{member.bio}</p>
                <a href={`mailto:${member.email}`} className="email">{member.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section activities-section">
        <div className="container">
          <div className="activities-grid">
            <div className="activities-column past-activities">
              <h2>Past Activities</h2>
              {pastMeetings.length === 0 ? (
                <div className="empty-state">No past activities yet</div>
              ) : (
                <div className="activities-list">
                  {pastMeetings.map((meeting, index) => (
                    <div key={index} className="activity-card past">
                      <div className="activity-date">{meeting.date}</div>
                      <div className="activity-title">{meeting.title}</div>
                      <div className="activity-summary">{meeting.summary}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="activities-column upcoming-schedule">
              <h2>Upcoming Schedule</h2>
              {upcomingMeetings.length === 0 ? (
                <div className="empty-state">No upcoming meetings scheduled</div>
              ) : (
                <div className="activities-list">
                  {upcomingMeetings.map((meeting, index) => (
                    <div key={index} className="activity-card upcoming">
                      <div className="activity-date">{meeting.date}</div>
                      <div className="activity-time">{meeting.time}</div>
                      <div className="activity-location">{meeting.location}</div>
                      <div className="activity-agenda">{meeting.agenda}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Group 9 - CS4366-001 - Texas Tech University</p>
          <p>Deepfake Detection: An Artifact Based Approach</p>
        </div>
      </footer>
    </div>
  )
}

export default App
