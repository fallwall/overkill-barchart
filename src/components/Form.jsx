import React, { useState } from 'react';

export default function Form() {
  const [count, setCount] = useState(0);

  const addField = (ev) => {
    ev.preventDefault();
    setCount(count + 1)
  }

  return (
    <div>
      <form>
        <label htmlFor="color">Color</label>
        <input type="color" name="color" />
        <label htmlFor="data1">Enter the First Data</label>
        <input type="number" name="data1" />
        <button onClick={addField}>Add Another</button>
        {Array(count).fill("field").map((form, i) =>
          <>
            <label htmlFor={`data${i}`}>Enter the Another Data</label>
            <input type="number" name={`data${i}`} />
            <button onClick={addField}>Add Another</button>
          </>
        )}
        <button>Finalize</button>
      </form>
    </div>
  )
}

