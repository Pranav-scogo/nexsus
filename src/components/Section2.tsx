export default function Section2() {
  return (
    <section style={{
      fontFamily: "monospace",
      padding: "5rem 2.5rem",
      display: "flex",
      alignItems: "center",
      gap: "4rem",
      backgroundColor: "#FFFFFF",
      minHeight: "60vh",
      boxSizing: "border-box"
    }}>
      <div style={{
        flex: 0.8,
        backgroundColor: "#E5E7EB",
        minHeight: "380px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        color: "#6B7280",
        fontSize: "1.1rem",
        fontWeight: "500"
      }}>
        [Placeholder Image]
      </div>
      <div style={{ flex: 1.2, textAlign: "left" }}>
        <p style={{
          fontSize: "0.9rem",
          color: "#4B5563",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
          fontWeight: "600",
          letterSpacing: "0.05em"
        }}>Secure</p>
        <h2 style={{
          fontSize: "2.3rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
          color: "#1F2937",
          lineHeight: "1.3"
        }}>Empowering Safe Internet for Learning Environments</h2>
        <p style={{ 
          marginBottom: "2.5rem", 
          lineHeight: "1.7", 
          fontSize: "1.15rem", 
          color: "#374151"
        }}>
          Nexus Smart DNS is designed to create safe browsing experiences for
          families and educational institutions. It effectively blocks harmful content
          while promoting a focused learning environment.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <button style={{
            fontFamily: "monospace",
            padding: "0.7rem 1.4rem",
            backgroundColor: "#1F2937",
            color: "white",
            border: "1px solid #1F2937",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "1rem"
          }}>Learn More</button>
          <a href="#" style={{
            fontFamily: "monospace",
            color: "#1F2937",
            textDecoration: "none",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "1rem"
          }}>Sign Up <span style={{ verticalAlign: "middle", marginLeft: "0.25rem" }}>{'->'}</span></a>
        </div>
      </div>
    </section>
  );
} 