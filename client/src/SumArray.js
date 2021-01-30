import { useState } from "react";
import { useHistory } from "react-router-dom";

function SumArray () {

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [result, setResult] = useState(0)
  const [String1, setString1] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    var payload = String1
    //console.log(JSON.stringify({ payload: "[" + payload + "]" }))
    fetch('http://localhost:8080/arraySum', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload: "[" + payload + "]" })
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
    <div className="sumArray">
      <h2>Array Nesting ! </h2>
      <br></br>
        <p>
            i will be an array, containing integers, strings and/or arrays like itself.
            Sum all the integers you find, anywhere in the nest of arrays.
            <br></br>
            Write it like this : 1,2,3,4 for simple sum or 1,2,[1,2,3] for nested arrays otherwise it will not work
        </p>
        
        
      <form onSubmit={handleSubmit}>
        <label>your numbers and/or arrays</label>
        <input 
          type="text" 
          required 
          value={String1}
          onChange={(e) => setString1(e.target.value)}
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

 
export default SumArray;