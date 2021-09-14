import React, { useEffect, useState } from "react";
import axios from "axios";

function Fibonacci() {
  const [seenFibIndexes, setSeenFibIndexes] = useState([]);
  const [fibValues, setFibValues] = useState([]);
  const [fibIndex, setFibIndex] = useState();

  async function fetchFibValues() {
    const values = (await axios.get("/api/values/current")).data;

    setFibValues(values);
  }

  async function fetchFibIndexes() {
    const seenIndexes = (await axios.get("/api/values/all")).data;

    setSeenFibIndexes(seenIndexes);
  }

  useEffect(() => {
    fetchFibValues().catch(console.error);
    fetchFibIndexes().catch(console.error);
  });

  function renderSeenIndexes() {
    return seenFibIndexes.map(({ number }) => number).join(", ");
  }

  function renderValues() {
    return fibValues.map((index) => (
      <div key={index}>
        Calculated values for {index}: {fibValues[index]}
      </div>
    ));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await axios.post("/api/values", { index: fibIndex });
    setFibIndex();
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
      {renderSeenIndexes()}

      <h3>Calculated Values</h3>
      {renderValues()}
    </div>
  );
}

export default Fibonacci;
