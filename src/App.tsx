import React from "react";
import styles from "./App.module.css";
import { ContentMessage } from "./components/ContentMesagge";

function App() {
  return (
    <div className={styles.app}>
      <header>
        <h2>POC - Container Websockets</h2>
      </header>
      <main>
        <ContentMessage />
      </main>
    </div>
  );
}

export default App;
