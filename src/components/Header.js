import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Trade Management</h1>
    </header>
  );
};

const styles = {
    header: {
      backgroundColor: "#4CAF50",
      color: "#fff",
      padding: "1rem",
      textAlign: "center",
    },
  };
  
  export default Header;
  