export default function Section3() {
  return (
    <section style={{
      fontFamily: "monospace",
      padding: "5rem 2.5rem",
      display: "flex",
      alignItems: "center",
      gap: "4rem",
      backgroundColor: "#FEFBFB", // Slightly softer pinkish-beige
      minHeight: "70vh",
      boxSizing: "border-box"
    }}>
      <div style={{ flex: 1.2, textAlign: "left" }}>
        <h2 style={{
          fontSize: "2.3rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
          color: "#1F2937", // Dark heading
          lineHeight: "1.3"
        }}>Create a Focused Learning Space with Nexus Smart DNS</h2>
        <p style={{ 
          marginBottom: "3rem", // More space before feature blocks
          lineHeight: "1.7", 
          fontSize: "1.15rem", 
          color: "#374151" // Dark grey paragraph
        }}>
          Transform your classrooms into distraction-free zones. With Nexus Smart
          DNS, students can focus on learning as the internet enterprises.
        </p>
        <div style={{ display: "flex", gap: "3rem", marginBottom: "2rem" }}> {/* Increased gap between feature blocks */}
          {[{
            iconText: "🎯", // Using an emoji as a placeholder icon
            title: "Stay Focused",
            description: "Limit access to distractions during critical learning hours or intervals."
          }, {
            iconText: "📚", // Using an emoji as a placeholder icon
            title: "Empower Learning",
            description: "Ensure students engage with educational content without any restrictions."
          }].map(feature => (
            <div key={feature.title} style={{ flex: 1 }}>
              <div style={{
                fontSize: "2rem", // Larger icon placeholder
                marginBottom: "1rem",
                backgroundColor: "#F3F4F6", // Light grey bg for icon area
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px", // More rounded icon area
                color: "#4B5563"
              }}>{feature.iconText}</div>
              <h3 style={{
                fontSize: "1.35rem", // Slightly larger feature title
                fontWeight: "bold", 
                marginBottom: "0.75rem", 
                color: "#1F2937"
              }}>{feature.title}</h3>
              <p style={{ lineHeight: "1.6", fontSize: "1rem", color: "#4B5563" }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{
        flex: 0.8,
        backgroundColor: "#E5E7EB",
        minHeight: "400px",
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