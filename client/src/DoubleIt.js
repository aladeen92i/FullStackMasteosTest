import { useState } from "react";
import { useHistory } from "react-router-dom";

function DoubleIt () {

  const [i, setI] = useState(0)
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [result, setResult] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {i}

    fetch('http://localhost:8080/doubleIt', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
    .then((res) => res.json())
    .then((res) => {
      setIsLoaded(true)
      setResult(res)
    }, (error) => {
      setIsLoaded(true)
      setError(error)
    })
  }

  // conditional rendering

  return (
    <div>
    <div className="doubleIt">
      <h2>Double the number !</h2>
      <form onSubmit={handleSubmit}>
        <label>your number</label>
        <input 
          type="number" 
          required 
          value={i}
          onChange={(e) => setI(e.target.value)}
        />
        <button>Here we Go !</button>
      </form>
    </div>
      <ul>
        <li>{result && <div>{result}</div>}</li>
      </ul>
    </div>

  );
}

 
export default DoubleIt;