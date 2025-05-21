export default function CTASection() {
  return (
    <section style={{
      fontFamily: "monospace",
      backgroundColor: "#4A3B24", // Dark olive/brown
      color: "white",
      padding: "6rem 2.5rem", // Adjusted padding
      textAlign: "center",
      minHeight: "50vh", // Good height for a CTA
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }}>
      <h2 style={{
        fontSize: "2.8rem", // Prominent heading
        fontWeight: "bold",
        marginBottom: "1.5rem",
        lineHeight: "1.2"
      }}>Discover Nexus Smart DNS Today</h2>
      <p style={{
        fontSize: "1.2rem",
        marginBottom: "3rem", // Increased space before buttons
        maxWidth: "680px",
        lineHeight: "1.7",
        opacity: 0.9 // Slightly softer white
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem" }}> {/* Consistent gap */}
        <button style={{
          fontFamily: "monospace",
          padding: "0.9rem 2rem", // Larger padding
          backgroundColor: "white", // Primary CTA button
          color: "#4A3B24", // Text color matches section background
          border: "2px solid white",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1.1rem"
        }}>Learn More</button>
        <button style={{
          fontFamily: "monospace",
          padding: "0.9rem 2rem",
          backgroundColor: "transparent",
          color: "white",
          border: "2px solid white", // Secondary CTA button
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1.1rem"
        }}>Sign Up</button>
      </div>
    </section>
  );
} 