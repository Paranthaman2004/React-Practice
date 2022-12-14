import React, { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [result, setResult] = useState("");
  const handleChange =(e)=>{
    setResult(e.target.value);
    if(isNaN)
      alert('Enter only Numbers')
    };
  const onclick = (e)=>{
    if(e.target.value==='='){
      const ev = eval;
      setResult(ev(result));
    }
    setResult(result+e.target.value)
  }
  console.log(result)
  return (
    <div className="container">
      {/* <form action=""> */}
      <div className="inputArea">
        <input type="text" value={result} id="res" onChange={handleChange}/>
      </div>
      <div className="nums">
            <button onClick={onclick} value='7'>7</button>
            <button onClick={onclick} value='8'>8</button>
            <button onClick={onclick} value='9'>9</button>
            <button onClick={onclick} value='/'>/</button>
            <button onClick={onclick} value='4'>4</button>
            <button onClick={onclick} value='5'>5</button>
            <button onClick={onclick} value='6'>6</button>
            <button onClick={onclick} value='*'>*</button>
            <button onClick={onclick} value='1'>1</button>
            <button onClick={onclick} value='2'>2</button>
            <button onClick={onclick} value='3'>3</button>
            <button onClick={onclick} value='-'>-</button>
            <button onClick={onclick} value='.'>.</button>
            <button onClick={onclick} value='0'>0</button>
            <button onClick={onclick} value='='>=</button>
            <button onClick={onclick} value='+'>+</button>
      </div>
    {/* </form> */}
  </div>
  );
};
export default Calculator;
