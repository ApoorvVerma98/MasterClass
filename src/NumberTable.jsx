import React, { useState } from "react";
import styles from "./NumberTable.module.css";

function NumberTable() {
  const [number, setNumber] = useState(0);
  const [numbersList, setNumbersList] = useState([]);

  const handleGenerateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
    setNumbersList([...numbersList, randomNumber]);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleGenerateNumber}>Generate Number</button>
      <div className={styles.numberBox}>{number}</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Number List</th>
          </tr>
        </thead>
        <tbody>
          {numbersList.map((num, index) => (
            <tr key={index}>
              <td>{num}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NumberTable;
