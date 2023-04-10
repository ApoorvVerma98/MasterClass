import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [logs, setLogs] = useState([]);

  const handleMouseEnter = () => {
    const currentTime = new Date().toLocaleString();
    setLogs((prevLogs) => [
      ...prevLogs,
      { time: currentTime, eventName: "Mouse enter" },
    ]);
  };

  const handleMouseLeave = () => {
    const currentTime = new Date().toLocaleString();
    setLogs((prevLogs) => [
      ...prevLogs,
      { time: currentTime, eventName: "Mouse leave" },
    ]);
  };

  return (
    <div className={styles.container}>
      <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Hello, world!
      </h1>
      <table className={styles.logTable}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event Name</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.time}</td>
              <td>{log.eventName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Header;
