import styles from './App.module.css';
import React from "react";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className={styles.App}>
        <Navbar/>
    </div>
  );
}

export default App;
