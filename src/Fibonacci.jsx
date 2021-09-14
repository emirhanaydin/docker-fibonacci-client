import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import styles from "./Fibonacci.module.css";

function Fibonacci() {
  const [seenFibIndexes, setSeenFibIndexes] = useState([]);
  const [fibValues, setFibValues] = useState({});
  const [fibIndex, setFibIndex] = useState("");

  async function fetchFibValues() {
    const values = (await axios.get("/api/values/current")).data;

    setFibValues(values);
  }

  async function fetchFibIndexes() {
    const seenIndexes = (await axios.get("/api/values/all")).data;

    setSeenFibIndexes(seenIndexes);
  }

  const dataCallback = useCallback(async () => {
    await Promise.all([fetchFibValues(), fetchFibIndexes()]);
  }, []);

  useEffect(() => {
    dataCallback().catch(console.error);
  }, [dataCallback]);

  function renderSeenIndexes() {
    return seenFibIndexes.map(({ number }) => <li key={number}>{number}</li>);
  }

  function renderValues() {
    return Object.entries(fibValues).map(([index, value]) => (
      <tr key={index}>
        <td>{index}</td>
        <td>{value}</td>
      </tr>
    ));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await axios.post("/api/values", { index: fibIndex });
    setFibIndex("");

    dataCallback().catch(console.error);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fibIndex">Enter index:</label>
        <input
          type="text"
          id="fibIndex"
          value={fibIndex}
          onChange={(event) => setFibIndex(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Calculated Indexes</h3>
      <ul className={styles.Indexes}>{renderSeenIndexes()}</ul>

      <h3>Calculated Values</h3>
      <table className={styles.Values}>
        <tbody>
          <tr>
            <th>Indexes</th>
            <th>Values</th>
          </tr>

          {renderValues()}
        </tbody>
      </table>
    </div>
  );
}

export default Fibonacci;
