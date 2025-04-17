import React from "react";
import Footer from "./Footer";


const AboutUs = () => {
  const styles = {
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "60px 20px",
      fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      backgroundColor: "#fff",
      color: "#333",
      lineHeight: 1.6,
    },
    heading1: {
      color: "#a8896c",
      fontSize: "2.5em",
      marginBottom: "20px",
    },
    heading2: {
        
      color: "#a8896c",
      fontSize: "1.6em",
      marginTop: "40px",
    },
    paragraph: {
      fontSize: "1.1em",
      marginBottom: "20px",
    },
    highlight: {
      fontWeight: "bold",
      color: "#b39274",
    },
    list: {
      paddingLeft: "20px",
    },
    listItem: {
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.container}>
    
      <h1 style={styles.heading1}>About Us</h1>
      <img src="images/SOL.jpeg" alt="" />
      <p style={styles.highlight}>Where Art Meets Adornment</p>

      <p style={styles.paragraph}>
        Welcome to a world where timeless elegance is more than just a
        statement—it’s a promise. At <strong>Soluna Jewelry</strong>, jewelry
        is not merely an accessory; it’s a celebration of individuality,
        moments, and memories.
      </p>

      <h2 style={styles.heading2}>Our Story</h2>
      <p style={styles.paragraph}>
        Born from a passion for artistry and the pursuit of beauty,{" "}
        <strong>Soluna Jewelry</strong> was founded with a simple vision: to
        create pieces that speak before you do. Inspired by nature,
        architecture, and the quiet strength of the people who wear them, our
        collections blend heritage with modernity.
      </p>
      <p style={styles.paragraph}>
        Each piece starts as a sketch and is handcrafted by skilled artisans
        using traditional techniques and contemporary design. The result?
        Jewelry that’s as unique as your story.
      </p>

      <h2 style={styles.heading2}>Our Philosophy</h2>
      <p style={styles.paragraph}>
        We believe jewelry should do more than sparkle—it should{" "}
        <em>resonate</em>. Whether it’s a gift to yourself or someone special,
        our creations are designed to empower, enchant, and endure.
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Craftsmanship First:</strong> We partner with artisans who
          take pride in precision and passion.
        </li>
        <li style={styles.listItem}>
          <strong>Ethical & Sustainable:</strong> Responsibly sourced gems and
          thoughtfully chosen metals.
        </li>
        <li style={styles.listItem}>
          <strong>Timeless by Design:</strong> Trends fade, but meaning and
          beauty endure.
        </li>
      </ul>

      <h2 style={styles.heading2}>Our Promise</h2>
      <p style={styles.paragraph}>
        When you wear <strong>Soluna Jewelry</strong>, you wear more than
        jewelry—you wear a story. Yours. Ours. One that's still being written,
        one sparkle at a time.
      </p>
      <img src="images/soluna1.jpeg" alt="" />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
