import {
  FaCode,
  FaServer,
  FaLaptopCode,
  FaTools,
  FaComments,
  FaLightbulb,
  FaUsers,
  FaTasks,
} from "react-icons/fa";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        padding: "100px 0",
        background: "transparent",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          My{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #AA367C 0%, #4A2FBD 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills
          </span>
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#B8B8B8",
            marginBottom: "60px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          I have developed my skills through hands-on projects, internship experience, and continuous learning, enabling me to build practical solutions and adapt to new technologies effectively.
        </p>

        {/* Skill Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
            marginBottom: "70px",
          }}
        >
          <SkillCard
            icon={<FaCode />}
            title="Frontend"
            skills="HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS"
          />

          <SkillCard
            icon={<FaServer />}
            title="Backend"
            skills="Node.js, Express.js, MongoDB, MySQL, REST APIs"
          />

          <SkillCard
            icon={<FaLaptopCode />}
            title="Programming"
            skills="Java, JavaScript, Data Structures & Algorithms"
          />

          <SkillCard
            icon={<FaTools />}
            title="Tools"
            skills="Git, GitHub, VS Code, Postman, XAMPP"
          />
        </div>

        {/* Bottom Section */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "60px",
          }}
        >
          <div>
            <h3
              style={{
                marginBottom: "30px",
                fontWeight: "700",
              }}
            >
              Technical Skills
            </h3>

            <ProgressBar title="Node.js / Express" percent="90%" />
            <ProgressBar title="HTML / CSS" percent="98%" />
            <ProgressBar title="MySQL / DBMS" percent="95%" />
            <ProgressBar title="Java / OOP" percent="85%" />
          </div>

          <div>
            <h3
              style={{
                marginBottom: "30px",
                fontWeight: "700",
              }}
            >
              Professional Skills
            </h3>

            <ProfessionalSkill
              icon={<FaComments />}
              title="Communication"
              level="Excellent"
            />

            <ProfessionalSkill
              icon={<FaLightbulb />}
              title="Problem Solving"
              level="Strong"
            />

            <ProfessionalSkill
              icon={<FaUsers />}
              title="Team Work"
              level="Excellent"
            />

            <ProfessionalSkill
              icon={<FaTasks />}
              title="Project Management"
              level="Good"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, title, skills }) => (
  <div
    style={{
      background:
        "linear-gradient(145deg, rgba(21,29,52,0.95), rgba(15,22,40,0.95))",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "20px",
      padding: "35px 25px",
      textAlign: "center",
      boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
    }}
  >
    <div
      style={{
        width: "75px",
        height: "75px",
        borderRadius: "50%",
        margin: "0 auto 20px",
        background:
          "linear-gradient(90deg, #AA367C 0%, #4A2FBD 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "30px",
      }}
    >
      {icon}
    </div>

    <h4
      style={{
        marginBottom: "15px",
        fontWeight: "700",
      }}
    >
      {title}
    </h4>

    <p
      style={{
        color: "#B8B8B8",
        margin: 0,
      }}
    >
      {skills}
    </p>
  </div>
);

const ProgressBar = ({ title, percent }) => (
  <div style={{ marginBottom: "28px" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <span>{title}</span>
      <span>{percent}</span>
    </div>

    <div
      style={{
        width: "100%",
        height: "10px",
        background: "#1C2541",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          width: percent,
          height: "100%",
          borderRadius: "20px",
          background:
            "linear-gradient(90deg, #AA367C 0%, #4A2FBD 100%)",
        }}
      />
    </div>
  </div>
);

const ProfessionalSkill = ({ icon, title, level }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "15px",
      marginBottom: "25px",
    }}
  >
    <div
      style={{
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        background:
          "linear-gradient(90deg, #AA367C 0%, #4A2FBD 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "20px",
      }}
    >
      {icon}
    </div>

    <div>
      <h5
        style={{
          margin: 0,
          fontWeight: "700",
        }}
      >
        {title}
      </h5>

      <p
        style={{
          margin: 0,
          color: "#B8B8B8",
        }}
      >
        {level}
      </p>
    </div>
  </div>
);