import React, { useState } from 'react';

export default function Form(props) {
  const [count, setCount] = useState(0);

  const addField = (ev) => {
    ev.preventDefault();
    setCount(count + 1);
    props.formUpdate();
  }

  return (
    <div>
      <form>
        <label htmlFor="color">Color</label>
        <input type="color" name="color" value={props.color} onChange={props.formColorChange} />
        <label htmlFor="1">Enter the First Data</label>
        <input type="number" name="1" value={props.data[props.data.length]} onChange={props.formDataChange} />
        <button onClick={addField}>{props.data.length > 0? "Update": "Add Another"}</button>
        {Array(count).fill("field").map((form, i) =>
          <>
            <br />
            <label htmlFor={`${i + 1}`}>Enter the Another Data</label>
            <input type="number" key={`${i + 1}`} name={`${i + 1}`} onChange={props.formDataChange} />
            <button onClick={addField}>{props.data.length-1 > i? "Update": "Add Another"}</button>
          </>
        )}
        {/* <button onClick={props.formSubmit}>Finalize</button> */}
      </form>
    </div>
  )
}

