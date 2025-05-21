export default function ContactForm() {
  const InputField = ({ label, type = "text", placeholder }: { label: string, type?: string, placeholder: string }) => (
    <div style={{ marginBottom: "1.25rem" }}>
      <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: "600", color: "#374151" }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "0.8rem",
          fontFamily: "monospace",
          border: "1px solid #D1D5DB",
          borderRadius: "6px",
          fontSize: "1rem",
          color: "#1F2937",
          backgroundColor: "white"
        }}
      />
    </div>
  );

  const RadioButton = ({ label, name, id }: { label: string, name: string, id: string }) => (
    <div style={{ display: "flex", alignItems: "center", marginRight: "1.5rem", marginBottom: "0.75rem" }}>
      <input type="radio" id={id} name={name} value={label} style={{ marginRight: "0.6rem", width: "18px", height: "18px", cursor: "pointer" }} />
      <label htmlFor={id} style={{ fontSize: "1rem", color: "#374151", cursor: "pointer" }}>{label}</label>
    </div>
  );

  return (
    <section style={{
      fontFamily: "monospace",
      padding: "6rem 2.5rem",
      backgroundColor: "#F8F7F4",
      boxSizing: "border-box"
    }}>
      <div style={{
        maxWidth: "1150px",
        margin: "0 auto",
        display: "flex",
        gap: "5rem",
        flexWrap: "wrap"
      }}>
        {/* Form Section (Left) */}
        <div style={{ flex: "2 1 600px" }}>
          <p style={{
            fontSize: "0.9rem",
            color: "#4B5563",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
            fontWeight: "600",
            letterSpacing: "0.05em"
          }}>Contact</p>
          <h2 style={{ fontSize: "2.3rem", fontWeight: "bold", marginBottom: "1rem", color: "#1F2937", lineHeight: "1.3" }}>Get in Touch</h2>
          <p style={{ marginBottom: "3rem", lineHeight: "1.7", fontSize: "1.15rem", color: "#374151" }}>We&apos;re here to assist you with any inquiries.</p>
          <form>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 250px" }}><InputField label="First name" placeholder="First name" /></div>
              <div style={{ flex: "1 1 250px" }}><InputField label="Last name" placeholder="Last name" /></div>
            </div>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 250px" }}><InputField label="Email" type="email" placeholder="your@email.com" /></div>
              <div style={{ flex: "1 1 250px" }}><InputField label="Phone number" type="tel" placeholder="+1 (555) 000-0000" /></div>
            </div>
            <div style={{ marginBottom: "1.25rem" }}>
              <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: "600", color: "#374151" }}>Choose a topic</label>
              <select style={{
                width: "100%",
                padding: "0.8rem",
                fontFamily: "monospace",
                border: "1px solid #D1D5DB",
                borderRadius: "6px",
                fontSize: "1rem",
                backgroundColor: "white",
                color: "#1F2937",
                cursor: "pointer"
              }}>
                <option value="">Select one...</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
              </select>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "0.9rem", fontWeight: "600", color: "#374151" }}>Which best describes you?</label>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {["First choice", "Second choice", "Third choice", "Fourth choice", "Fifth choice", "Other"].map(choice => (
                  <RadioButton key={choice} label={choice} name="description" id={`desc-${choice.toLowerCase().replace(" ", "-")}`} />
                ))}
              </div>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: "600", color: "#374151" }}>Message</label>
              <textarea
                placeholder="Type your message..."
                rows={5}
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  fontFamily: "monospace",
                  border: "1px solid #D1D5DB",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  color: "#1F2937",
                  backgroundColor: "white",
                  lineHeight: "1.5"
                }}
              />
            </div>
            <div style={{ marginBottom: "2rem", display: "flex", alignItems: "center" }}>
              <input type="checkbox" id="accept-terms" style={{ marginRight: "0.6rem", width: "18px", height: "18px", cursor: "pointer" }} />
              <label htmlFor="accept-terms" style={{ fontSize: "1rem", color: "#374151", cursor: "pointer" }}>I accept the terms</label>
            </div>
            <button type="submit" style={{
              fontFamily: "monospace",
              padding: "0.9rem 2rem",
              backgroundColor: "#1F2937",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "1.05rem",
              fontWeight: "600"
            }}>Submit</button>
          </form>
        </div>
        {/* Contact Info (Right) */}
        <div style={{ flex: "1 1 300px", paddingTop: "6rem" }}>
          {[{
            icon: "✉️", title: "Email", text: "Reach us at your convenience", value: "info@example.com", href: "mailto:info@example.com"
          }, {
            icon: "📞", title: "Phone", text: "Call us anytime for support", value: "+1 (000) 000-0000", href: "tel:+10000000000"
          }, {
            icon: "📍", title: "Office", text: "123 Example St, Sydney NSW 2000 AU", value: "Get directions", href: "#", showArrow: true
          }].map(item => (
            <div key={item.title} style={{ marginBottom: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.8rem", marginRight: "1rem", color: "#4B5563" }}>{item.icon}</span>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "bold", margin: 0, color: "#1F2937" }}>{item.title}</h3>
              </div>
              <p style={{ margin: "0 0 0.6rem 3.3rem", color: "#374151", fontSize: "1rem", lineHeight: "1.6" }}>{item.text}</p>
              <a href={item.href} style={{ marginLeft: "3.3rem", color: "#0F4C5C", textDecoration: "none", fontWeight: "600", fontSize: "1rem" }}>
                {item.value} {item.showArrow && <span style={{ verticalAlign: "middle", marginLeft: "0.25rem" }}>{'->'}</span>}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 