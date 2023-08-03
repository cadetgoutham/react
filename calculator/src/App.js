import './App.css';
import {useState} from 'react'

function App() {
  const [data, setData] = useState("")
  const handleClick = (e) => {
    setData(ps => ps+e.target.value)
  }
  const handleClear = () =>{
    if(data !== ""){
      setData(ps => ps.slice(0, -1))
    }
  }
  const handleReset = (e) => {
    setData("")
  }
  const handleEquation = (e) => {
    try {
      let solution = eval(data);
      
      if (Number.isInteger(solution)) {
        setData(solution.toString());
      } else {
        setData(solution.toFixed(2).toString());
      }
    } catch (err) {
      alert("Invalid Input");
    }
  }
  return (
    <div>
    <div className='App'>

      <div id='inputBox'>
          <h2>Calculator</h2>
          <input value={data}/>
      </div>    
      <div className='Buttons'>
          <input type='button' value={"AC"} onClick={e => handleReset(e)}/>
          <input type='button' value={"DEL"} onClick={e => handleClear(e)}/>
          <input type='button' value={"/"} onClick={e => handleClick(e)}/>
          <input type='button' value={"*"} onClick={e => handleClick(e)}/>
          <input type='button' value={"7"} onClick={e => handleClick(e)}/>
          <input type='button' value={"8"} onClick={e => handleClick(e)}/>
          <input type='button' value={"9"} onClick={e => handleClick(e)}/>
          <input type='button' value={"+"} onClick={e => handleClick(e)}/>
          <input type='button' value={"6"} onClick={e => handleClick(e)}/>
          <input type='button' value={"5"} onClick={e => handleClick(e)}/>
          <input type='button' value={"4"} onClick={e => handleClick(e)}/>
          <input type='button' value={"-"} onClick={e => handleClick(e)}/>
          <input type='button' value={"1"} onClick={e => handleClick(e)}/>
          <input type='button' value={"2"} onClick={e => handleClick(e)}/>
          <input type='button' value={"3"} onClick={e => handleClick(e)}/>
          <input type='button' value={"."} onClick={e => handleClick(e)}/>
          <input type='button' className="lastBtn" value={"0"} onClick={e => handleClick(e)}/>
          <input type='button' className='lastBtn' value={"="} onClick={e => handleEquation(e)}/>
      </div>
    </div>
    </div>
  );
}

export default App;
