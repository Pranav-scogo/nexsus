import React from 'react';

export default function Footer() {
  const FooterLink = ({ children, href = "#" }: { children: React.ReactNode, href?: string }) => (
    <a href={href} style={{
      fontFamily: "monospace",
      color: "#A0AEC0",
      textDecoration: "none",
      display: "block",
      marginBottom: "0.75rem",
      fontSize: "0.95rem",
    }}>
      {children}
    </a>
  );

  const SocialIconPlaceholder = ({ children, title }: { children: React.ReactNode, title: string }) => (
    <a href="#" title={title} style={{ 
      fontFamily: "monospace", 
      color: "#A0AEC0", 
      fontSize: "1.4rem", 
      cursor: "pointer",
      textDecoration: "none"
    }}>{children}</a>
  );

  return (
    <footer style={{
      fontFamily: "monospace",
      backgroundColor: "#3B2F22",
      color: "#D1D5DB",
      padding: "5rem 2.5rem 2.5rem 2.5rem",
      boxSizing: "border-box"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "4rem",
        flexWrap: "wrap",
        gap: "3rem",
        maxWidth: "1200px",
        margin: "0 auto 4rem auto"
      }}>
        <div style={{ flexBasis: "220px", marginRight: "2.5rem" }}>
          <div style={{ fontSize: "2rem", color: "white", marginBottom: "1.25rem", fontWeight: "bold" }}>Logo</div>
        </div>

        {[ "One", "Two", "Three" ].map(col => (
             <div key={`col-${col}`} style={{ flex: 1, minWidth: "170px" }}>
             <h4 style={{ color: "white", marginBottom: "1.5rem", fontSize: "1.15rem", fontWeight: "bold" }}>Column {col}</h4>
             <FooterLink>About Us</FooterLink>
             <FooterLink>Contact Us</FooterLink>
             <FooterLink>Support Center</FooterLink>
             <FooterLink>Blog Posts</FooterLink>
             <FooterLink>FAQ&apos;s</FooterLink>
           </div>
        ))}
       
        <div style={{ flex: 1.8, minWidth: "300px" }}>
          <h4 style={{ color: "white", marginBottom: "1.5rem", fontSize: "1.15rem", fontWeight: "bold" }}>Subscribe</h4>
          <p style={{ marginBottom: "1.5rem", lineHeight: "1.6", fontSize: "0.95rem", color: "#E5E7EB" }}>Join our newsletter to stay up to date on features and releases.</p>
          <div style={{ display: "flex", marginBottom: "1rem" }}>
            <input type="email" placeholder="Enter your email" style={{
              fontFamily: "monospace",
              flexGrow: 1,
              padding: "0.85rem",
              border: "1px solid #5C5043",
              borderRadius: "6px 0 0 6px",
              backgroundColor: "#504234",
              color: "white",
              fontSize: "1rem"
            }} />
            <button style={{
              fontFamily: "monospace",
              padding: "0.85rem 1.5rem",
              border: "none",
              backgroundColor: "white",
              color: "#3B2F22",
              borderRadius: "0 6px 6px 0",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem"
            }}>Subscribe</button>
          </div>
          <p style={{ fontSize: "0.85rem", color: "#A0AEC0" }}>By subscribing you agree to our Privacy Policy and consent to receive updates from our company.</p>
        </div>
      </div>

      <div style={{
        borderTop: "1px solid #5C5043",
        paddingTop: "2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1.5rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <p style={{ fontSize: "0.9rem", color: "#A0AEC0" }}>© 2024 Nexus. All rights reserved.</p>
        <div style={{ display: "flex", gap: "1.8rem", fontSize: "0.9rem" }}>
          <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
          <FooterLink href="/cookie-settings">Cookie Settings</FooterLink>
        </div>
        <div style={{ display: "flex", gap: "1.5rem"}}>
          <SocialIconPlaceholder title="Facebook">FB</SocialIconPlaceholder>
          <SocialIconPlaceholder title="Twitter">TW</SocialIconPlaceholder>
          <SocialIconPlaceholder title="Instagram">IG</SocialIconPlaceholder>
          <SocialIconPlaceholder title="YouTube">YT</SocialIconPlaceholder>
        </div>
      </div>
    </footer>
  );
}
