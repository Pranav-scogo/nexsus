export default function Section1() {
  return (
    <section style={{
      fontFamily: "monospace",
      padding: "5rem 2.5rem",
      display: "flex",
      alignItems: "center",
      gap: "4rem",
      backgroundColor: "#F8F7F4",
      minHeight: "60vh",
      boxSizing: "border-box"
    }}>
      <div style={{ flex: 1.2, textAlign: "left" }}>
        <h2 style={{
          fontSize: "2.3rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
          color: "#1F2937",
          lineHeight: "1.3"
        }}>Empower Your Internet Experience with Nexus Smart DNS</h2>
        <p style={{ 
          marginBottom: "2.5rem", 
          lineHeight: "1.7", 
          fontSize: "1.15rem",
          color: "#374151"
        }}>
          Nexus Smart DNS provides a secure and fast solution for families and
          educational institutions. Protect your network while enhancing learning with
          our advanced content filtering and blocking features.
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
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
          <button style={{
            fontFamily: "monospace",
            padding: "0.7rem 1.4rem",
            backgroundColor: "transparent",
            color: "#1F2937",
            border: "1px solid #4B5563",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "1rem"
          }}>Sign Up</button>
        </div>
      </div>
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
    </section>
  );
} 