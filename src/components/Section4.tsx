import React from 'react';

export default function Section4() {
  const features = [
    {
      title: "No Telemetry or Data Collection",
      text: "We believe in complete transparency and user control. We do not collect or store any personal data.",
      imgPlaceholder: "📊"
    }, {
      title: "Enhanced Security with DNSSEC",
      text: "Protect your network with robust DNS security protocols, preventing DNS spoofing and other attacks.",
      imgPlaceholder: "🛡️"
    }, {
      title: "Randomized Upstream DNS Resolvers",
      text: "Avoid centralizing DNS traffic for improved privacy and resilience against censorship or outages.",
      imgPlaceholder: "🔄"
    }
  ];

  return (
    <section style={{
      fontFamily: "monospace",
      padding: "6rem 2.5rem",
      textAlign: "center",
      backgroundColor: "#F8F7F4",
      boxSizing: "border-box"
    }}>
      <p style={{
        fontSize: "0.95rem",
        color: "#4A5568",
        textTransform: "uppercase",
        marginBottom: "0.75rem",
        fontWeight: "600",
        letterSpacing: "0.075em"
      }}>Secure</p>
      <h2 style={{
        fontSize: "2.6rem",
        fontWeight: "bold",
        marginBottom: "1.5rem",
        maxWidth: "750px",
        margin: "0 auto 1.5rem auto",
        color: "#1A202C",
        lineHeight: "1.25"
      }}>Uncompromising Security and Privacy Features</h2>
      <p style={{
        marginBottom: "4rem",
        maxWidth: "780px",
        margin: "0 auto 4rem auto",
        lineHeight: "1.75",
        fontSize: "1.2rem",
        color: "#2D3748"
      }}>
        Nexus Smart DNS prioritizes your security and privacy with 100% no-telemetry or tracking. Our
        advanced features like DoH/DoT and randomized upstream DNS resolvers ensure your internet
        activity remains private and secure.
      </p>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "2.5rem",
        flexWrap: "wrap",
        maxWidth: "1100px",
        margin: "0 auto 4rem auto"
      }}>
        {features.map((feature, index) => (
          <div key={feature.title} className={`feature-card-${index}`}
            style={{
            flex: "1 1 300px",
            padding: "2.5rem 2rem",
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
            border: "1px solid #E2E8F0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <div style={{
              backgroundColor: "#EDF2F7",
              width: "80px",
              height: "80px",
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "16px",
              fontSize: "2.8rem",
              color: "#2D3748"
            }}>{feature.imgPlaceholder}</div>
            <h3 style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#1A202C"
            }}>{feature.title}</h3>
            <p style={{ lineHeight: "1.65", fontSize: "1.05rem", color: "#4A5568", flexGrow: 1 }}>{feature.text}</p>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem" }}>
        <button style={{
          fontFamily: "monospace",
          padding: "0.8rem 1.8rem",
          backgroundColor: "#1A202C",
          color: "white",
          border: "2px solid #1A202C",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "1.05rem"
        }}>Learn More</button>
        <a href="#" style={{
          fontFamily: "monospace",
          padding: "0.8rem 1.8rem",
          color: "#1A202C",
          textDecoration: "none",
          fontWeight: "600",
          border: "2px solid #D1D5DB",
          borderRadius: "8px",
          fontSize: "1.05rem"
        }}>Sign Up <span style={{ verticalAlign: "middle", marginLeft: "0.25rem" }}>{'->'}</span></a>
      </div>
    </section>
  );
} 