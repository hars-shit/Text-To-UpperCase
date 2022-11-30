import React, {useState} from 'react'

export default function TextForm(props) {
  const toUpperCase= ()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  const clear=()=>{
    setText(" ");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const[text, setText]=useState("Enter The text ");
  return (
    <>
<div className="mb-3" >

    <h1>{props.label}</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1"value={text}  onChange={handleOnChange} rows="6"></textarea>
  <button className='btn btn-primary mb3 mx3' onClick={toUpperCase}>Convert To UpperCase</button>
  <button className='btn btn-dark mb3 mx3' onClick={clear}>Clear</button>
  
</div>
<div className="container my-3">
<h1>Your Text Summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} Time to read </p>

</div>
</>
  )
}
