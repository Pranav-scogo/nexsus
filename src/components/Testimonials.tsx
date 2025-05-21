import React from 'react';

export default function Testimonials() {
  const Star = ({ filled = true }: { filled?: boolean }) => (
    <span style={{
      color: filled ? "#F59E0B" : "#CBD5E0",
      fontSize: "1.5rem",
      marginRight: "0.2rem"
    }}>★</span>
  );

  const testimonialsData = [
    {
      quote: "Nexus Smart DNS has made a massive safety net for the students. It's a game changer for our school!",
      name: "John Doe",
      title: "Principal, Lincoln High",
      avatarPlaceholder: "JD",
      logoPlaceholder: "WF",
      rating: 5
    },
    {
      quote: "As a parent, I feel more secure knowing my children are protected online. Nexus Smart DNS is essential for our home!",
      name: "Jane Lamar",
      title: "Parent, Tech Enthusiast",
      avatarPlaceholder: "JL",
      logoPlaceholder: "WF",
      rating: 5
    }
  ];

  return (
    <section style={{
      fontFamily: "monospace",
      padding: "6rem 2.5rem",
      backgroundColor: "#FEFBFB",
      boxSizing: "border-box"
    }}>
      <h2 style={{
        fontSize: "2.6rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        textAlign: "center",
        color: "#1A202C"
      }}>Customer Testimonials</h2>
      <p style={{
        textAlign: "center",
        marginBottom: "4rem",
        fontSize: "1.2rem",
        maxWidth: "700px",
        margin: "0 auto 4rem auto",
        lineHeight: "1.75",
        color: "#2D3748"
      }}>Nexus Smart DNS transformed our online safety.</p>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "3rem",
        flexWrap: "wrap",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        {testimonialsData.map((testimonial, index) => (
          <div key={testimonial.name} className={`testimonial-card-${index}`}
            style={{
              flex: "1 1 400px",
              minWidth: "350px",
              border: "1px solid #E2E8F0",
              padding: "2.5rem",
              borderRadius: "12px",
              backgroundColor: "white",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
              display: "flex",
              flexDirection: "column"
            }}>
            <div style={{ marginBottom: "1.5rem" }}>
              {[...Array(5)].map((_, i) => <Star key={i} filled={i < testimonial.rating} />)}
            </div>
            <p style={{
              margin: "0 0 2rem 0",
              lineHeight: "1.7",
              fontSize: "1.15rem",
              fontStyle: "italic",
              color: "#2D3748",
              flexGrow: 1
            }}>
              &quot;{testimonial.quote}&quot;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "auto" }}>
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "#EDF2F7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "1.4rem",
                color: "#2D3748"
              }}>{testimonial.avatarPlaceholder}</div>
              <div style={{ flexGrow: 1 }}>
                <strong style={{ fontSize: "1.2rem", color: "#1A202C" }}>{testimonial.name}</strong>
                <p style={{ fontSize: "0.95rem", color: "#4A5568", marginTop: "0.1rem" }}>{testimonial.title}</p>
              </div>
              <div style={{
                padding: "0.5rem 0.8rem",
                fontSize: "0.9rem",
                color: "#4A5568",
                backgroundColor: "#F0F4F8",
                borderRadius: "6px",
                fontWeight: "500"
              }}>{testimonial.logoPlaceholder}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 