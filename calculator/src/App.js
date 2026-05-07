import { useState } from 'react';

function App() {
  const [data, setData] = useState("");

  const handleClick = (val) => setData(prev => prev + val);
  const handleReset = () => setData("");
  const handleClear = () => setData(prev => prev.slice(0, -1));

  const handleEquation = () => {
    try {
      // eslint-disable-next-line
      const solution = new Function(`return ${data}`)();
      
      if (solution === undefined || isNaN(solution)) throw new Error();
      
      setData(Number.isInteger(solution) ? solution.toString() : solution.toFixed(2).toString());
    } catch (err) {
      alert("Invalid calculation");
      setData("");
    }
  };

  return (
    <div className="container">
      <div className="calculator-card">
        <div className="display-section">
          <h2>CALC</h2>
          <input type="text" value={data} readOnly placeholder="0" />
        </div>

        <div className="keypad">
          <button className="btn-alt" onClick={handleReset}>AC</button>
          <button className="btn-alt" onClick={handleClear}>DEL</button>
          <button className="btn-operator" onClick={() => handleClick("/")}>÷</button>
          <button className="btn-operator" onClick={() => handleClick("*")}>×</button>
          
          {[7, 8, 9].map(num => <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>)}
          <button className="btn-operator" onClick={() => handleClick("+")}>+</button>
          
          {[4, 5, 6].map(num => <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>)}
          <button className="btn-operator" onClick={() => handleClick("-")}>-</button>
          
          {[1, 2, 3].map(num => <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>)}
          <button onClick={() => handleClick(".")}>.</button>
          
          <button className="btn-zero" onClick={() => handleClick("0")}>0</button>
          <button className="btn-equal" onClick={handleEquation}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;