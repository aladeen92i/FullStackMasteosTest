import { useState } from "react";
import { useHistory } from "react-router-dom";

function WhatExtension () {

  const [i, setI] = useState("")
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [result, setResult] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {i}

    fetch('http://localhost:8080/whatExtension', {
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
    <div className="whatExtension">
      <h2>What kind of extension is this ? (submit a name of a file along with his .extension</h2>
      <form onSubmit={handleSubmit}>
        <label>your filename</label>
        <input 
          type="text" 
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

 
export default WhatExtension;