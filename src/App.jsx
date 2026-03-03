import './App.css'

function App() {
  const teamMembers = [
    {
      name: "Shivansh Sawant",
      role: "ML Engineer / Backend Engineer",
      email: "shisawan@ttu.edu",
      // bio: "Graduate student specializing in machine learning and computer vision."
    },
    {
      name: "Abhimanyu Karki",
      role: "MLOps / Frontend",
      email: "abhi.karki@ttu.edu",
      // bio: "Focused on deep learning architectures for image classification."
    },
    {
      name: "Tanush Arunprasad",
      role: "ML Engineer / Data Engineer",
      email: "tarunpra@ttu.edu",
      // bio: "Expert in data preprocessing and statistical analysis."
    },
    {
      name: "Jesus Alarcon",
      role: "ML Engineer / Research",
      email: "jesalarc@ttu.edu",
      // bio: "Specializes in artifact-based detection methodologies."
    },
    {
      name: "Gabriel Sotelo",
      role: "Backend Engineer / Research",
      email: "gabrsote@ttu.edu",
      // bio: "Full-stack developer with experience in model deployment."
    }
  ];

  const meetings = [
    { day: "03/05/2026", time: "4:00 PM - 5:00 PM", location: "Online (Zoom)", agenda: "Discussion for latest models for feature extraction, data collection" },
    { day: "03/07/2026", time: "2:00 PM - 3:00 PM", location: "Library Study Room", agenda: "Progress review, discussion on system entities, UML diagrams, and assign roles for report writing" },
    { day: "03/10/2026", time: "10:00 AM - 11:00 AM", location: "Library Study Room", agenda: "Code and report review and discussion" }
  ];

  return (
    <div className="app">
      {/* Header */}
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

      {/* Team Members */}
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

      {/* Meeting Schedule */}
      <section className="section schedule-section">
        <div className="container">
          <h2>Meeting Schedule</h2>
          <div className="schedule-table">
            <div className="schedule-header">
              <span>Day</span>
              <span>Time</span>
              <span>Location</span>
              <span>Agenda</span>
            </div>
            {meetings.map((meeting, index) => (
              <div key={index} className="schedule-row">
                <span className="schedule-day">{meeting.day}</span>
                <span className="schedule-time">{meeting.time}</span>
                <span className="schedule-location">{meeting.location}</span>
                <span className="schedule-agenda">{meeting.agenda}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
