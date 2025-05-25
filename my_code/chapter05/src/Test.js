// import React from "react";

// function WelcomeMessage({ isLoggedIn }) {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       {isLoggedIn && <p>Welcome back, user!</p>}
//     </div>
//   );
// }

// export default function Test() {
//   const isLoggedIn = true; // change to false to test the other case

//   return (
//     <div>
//       <WelcomeMessage isLoggedIn={isLoggedIn} />
//     </div>
//   );
// }


import React from "react";

// Inline CSS styles as JavaScript objects
const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#f0f4f8",
  },
  container: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    display: "inline-block",
  },
  title: {
    color: "#333",
    marginBottom: "20px",
  },
  welcome: {
    color: "#4CAF50",
    fontSize: "18px",
    fontWeight: "bold",
  },
};

function WelcomeMessage({ isLoggedIn }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Home Page</h1>
      {isLoggedIn && <p style={styles.welcome}>Welcome back, user!</p>}
    </div>
  );
}

export default function App() {
  const isLoggedIn = true; // change to false to test the other case

  return (
    <div style={styles.app}>
      <WelcomeMessage isLoggedIn={isLoggedIn} />
    </div>
  );
}