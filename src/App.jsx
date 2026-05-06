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
    { date: "05/03/2026    2:00 PM - 4:00 PM    Library", title: "Report Finalization & Submission Preparation", summary: "Final review of Stage 3 report formatting, verified all diagrams and citations, prepared submission package including abstract, methodology, results, and conclusions" },
    { date: "05/01/2026    3:00 PM - 5:00 PM    Zoom", title: "Final Report Review & Proofreading", summary: "proofreading of Stage 3 report, reviewed temporal CNN results and model comparisons, finalized Implementation details section of the report" },
    { date: "04/29/2026    1:00 PM - 3:00 PM    Library", title: "Stage 3 Report - Refinement & Graphics", summary: "Enhanced report with performance graphs and confusion matrices. Refined sections on explainability module and PDF report generation" },
    { date: "04/27/2026    2:00 PM - 4:00 PM    Zoom", title: "Stage 3 Report Writing - Content Development", summary: "Began writing Stage 3 comprehensive report covering temporal CNN architecture, ResNeXt-50 integration, CNN configurations, and system evaluation metrics" },
    { date: "04/25/2026    11:00 AM - 1:00 PM    Library", title: "Post-Presentation Review & Report Planning", summary: "Reviewed presentation feedback, discussed system improvements for final report, planned Stage 3 deliverables including explainability analysis and PDF report features" },
    { date: "04/23/2026    4:00 PM - 5:00 PM    Library", title: "FINAL PRESENTATION - Deepfake Detection System", summary: "final presentation on temporal CNN-based deepfake detection system with explainability features, reviewed the deployment for further enhancements including renting of a cloud GPU" },
    { date: "04/21/2026    2:00 PM - 4:00 PM    Library", title: "Final Presentation Rehearsal", summary: "Complete end-to-end presentation practice with timing, refined technical explanations, practiced answers to potential questions on model architecture and explainability" },
    { date: "04/19/2026    3:00 PM - 5:00 PM    Zoom", title: "Presentation Slides Refinement & Practice", summary: "Enhanced slide content with model architecture diagrams, performance metrics visualizations, and forensic report samples. Practiced transitions demo and slides, created a fallback option by running backend on two separate colab notebooks and exposing port with ngrok tunneling" },
    { date: "04/17/2026    11:00 AM - 1:00 PM    Library", title: "Presentation Slides Creation & Drafting", summary: "Collaborated on presentation structure: system overview, temporal CNN architecture, ResNeXt-50 feature extraction, CNN based temporal modeling, evaluation results, and explainability module" },
    { date: "04/15/2026    2:00 PM - 4:00 PM    Library", title: "Model Evaluation & Baseline Comparison", summary: "Completed temporal CNN vs frame-level MLP baseline comparison, analyzed accuracy, precision, FNR, FPR metrics, verified performance gains from temporal aggregation approach" },
    { date: "04/13/2026    3:00 PM - 5:00 PM    Zoom", title: "Temporal CNN Architecture Deep Dive", summary: "Reviewed CNN layer configurations for 5-frame temporal aggregation, validated ResNeXt-50 feature extraction pipeline, tested a possible gradient computation for Grad-CAM explainability" },
    { date: "04/11/2026    1:00 PM - 3:00 PM    Library", title: "Model Training Progress Review", summary: "Monitored temporal CNN training progress on FaceForensics++ dataset, reviewed loss curves and validation metrics, validated inference pipeline for video preprocessing and frame extraction" },
    { date: "04/09/2026    1:00 PM - 3:00 PM    Library", title: "Stage 2 Report Submission & Deadline", summary: "Reviewed and Submitted Stage 2 report, discussed cloud infrastructure for inference and deployment" },
    { date: "04/07/2026    2:00 PM - 4:00 PM    Zoom", title: "Testing Strategy & Evaluation Metrics Planning", summary: "Finalized evaluation metrics (Accuracy, Precision, FNR, FPR), and reviewed test pipeline for temporal vs frame-level baseline comparison" },
    { date: "04/05/2026    3:00 PM - 5:00 PM    Library", title: "ResNeXt-50 Feature Extraction & LSTM Configuration", summary: "Reviewed ResNeXt-50 pretrained model for feature extraction, configured 30-frame sliding window for LSTM temporal modeling" },
    { date: "04/03/2026    5:00 PM - 6:00 PM    Zoom", title: "Review report and model training and testing and discuss on benchmarks", summary: "Review report and model training and testing and discuss on benchmarks" },
    { date: "04/02/2026    2:00 PM - 3:00 PM    Library", title: "Review report, model training and testing and discuss on benchmarks", summary: "Review report, model training and testing and discuss on benchmarks" },
    { date: "03/31/2026    11:00 AM - 1:00 PM    Zoom", title: "Review report and model training", summary: "Review report and model training" },
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
    { date: "05/07/2026", time: "10:00 AM - 12:00 PM", location: "Library", agenda: "Project Review - Discuss feedback, analyze Stage 3 report, and evaluate overall project outcomes and system performance" },
    { date: "05/09/2026", time: "2:00 PM - 4:00 PM", location: "Zoom", agenda: "Deployment & Future Work Planning - Discuss production deployment strategies for the temporal CNN model, explore potential improvements, and plan for future research directions in deepfake detection" },
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
