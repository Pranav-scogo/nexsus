export default function Navbar() {
  return (
    <nav style={{
      fontFamily: "monospace",
      backgroundColor: "#F8F7F4",
      padding: "1rem 2.5rem", // Slightly more horizontal padding
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #E0E0E0",
      boxShadow: "0 2px 4px rgba(0,0,0,0.03)" // Subtle shadow for depth
    }}>
      <div style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#1F2937" }}>Logo</div> {/* Darker logo text */}
      <div style={{ display: "flex", gap: "2.5rem", fontSize: "1.05rem" }}> {/* Increased gap, slightly larger nav links */}
        <a href="#" style={{ textDecoration: "none", color: "#374151" }}>Home</a> {/* Dark grey for links */}
        <a href="#" style={{ textDecoration: "none", color: "#374151" }}>Features</a>
        <a href="#" style={{ textDecoration: "none", color: "#374151" }}>Pricing</a>
        <a href="#" style={{ textDecoration: "none", color: "#374151" }}>Support</a>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button style={{
          fontFamily: "monospace",
          padding: "0.6rem 1.2rem",
          backgroundColor: "transparent",
          color: "#1F2937", // Darker text
          border: "1px solid #D1D5DB", // Lighter border
          borderRadius: "6px", // Slightly more rounded
          cursor: "pointer",
          fontSize: "0.95rem",
          fontWeight: "500"
        }}>Sign In</button>
        <button style={{
          fontFamily: "monospace",
          padding: "0.6rem 1.2rem",
          backgroundColor: "#1F2937", // Darker background
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "0.95rem",
          fontWeight: "500"
        }}>Learn More</button>
      </div>
    </nav>
  );
} 