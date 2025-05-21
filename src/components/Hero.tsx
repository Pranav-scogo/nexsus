export default function Hero() {
  return (
    <section style={{
      fontFamily: "monospace",
      backgroundColor: "#0F4C5C",
      color: "white",
      padding: "8rem 2rem",
      textAlign: "center",
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }}>
      <h1 style={{
        fontSize: "3.2rem",
        fontWeight: "700",
        marginBottom: "1.5rem",
        maxWidth: "800px",
        lineHeight: "1.2"
      }}>Empower Learning with Safe DNS Solutions</h1>
      <p style={{
        fontSize: "1.25rem",
        marginBottom: "3rem",
        lineHeight: "1.7",
        maxWidth: "700px",
        opacity: 0.9
      }}>
        Nexus Smart DNS provides a secure and efficient way to manage internet access for families
        and educational institutions. Protect your network while enhancing learning with our free learning
        DNS resolver.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem" }}>
        <button style={{
          fontFamily: "monospace",
          padding: "0.8rem 1.8rem",
          backgroundColor: "white",
          color: "#0F4C5C",
          border: "2px solid white",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1.05rem",
          transition: "transform 0.1s ease-in-out"
        }}>Learn More</button>
        <button style={{
          fontFamily: "monospace",
          padding: "0.8rem 1.8rem",
          backgroundColor: "transparent",
          color: "white",
          border: "2px solid white",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1.05rem",
          transition: "transform 0.1s ease-in-out"
        }}>Sign Up</button>
      </div>
    </section>
  );
}