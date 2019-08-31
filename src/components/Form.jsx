import React, { useState } from 'react';

export default function Form(props) {
  const [count, setCount] = useState(0);

  const addField = (ev) => {
    ev.preventDefault();
    setCount(count + 1)
  }

  return (
    <div>
      <form>
        <label htmlFor="color">Color</label>
        <input type="color" name="color" value={props.color} onChange={props.formColorChange}/>
        <label htmlFor="data1">Enter the First Data</label>
        <input type="number" name="data1" value={props.data[props.data.length]} onChange={props.formDataChange}/>
        <button onClick={addField}>Add Another</button>
        {Array(count).fill("field").map((form, i) =>
          <>
            <label htmlFor={`data${i}`}>Enter the Another Data</label>
            <input type="number" name={`data${i}`} onChange={props.formDataChange}/>
            <button onClick={addField}>Add Another</button>
          </>
        )}
        {/* <button onClick={props.formSubmit}>Finalize</button> */}
      </form>
    </div>
  )
}

