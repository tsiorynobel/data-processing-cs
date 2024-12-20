import React from "react";
const Footer = () => {
  return (
<footer style={styles.footer}>
<p>&copy; {new Date().getFullYear()} Trade Management App</p>
</footer>
  );
};
const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem",
    textAlign: "center",
    marginTop: "2rem",
  },
};
export default Footer;