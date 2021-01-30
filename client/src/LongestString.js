import { useState } from "react";
import { useHistory } from "react-router-dom";

function LongestString () {

  const [String1, setString1] = useState('')
  const [String2, setString2] = useState('')
  const [String3, setString3] = useState('')
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [result, setResult] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = [String1, String2, String3]

    fetch('http://localhost:8080/longestString', {
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
      <h2>which is the longest string ?</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>your strings</label>
        <br></br>
        <input 
          type="text" 
          required 
          value={String1}
          onChange={(e) => setString1(e.target.value)}
        />
        <br></br>
                <input 
          type="text" 
          required 
          value={String2}
          onChange={(e) => setString2(e.target.value)}
        />
        <br></br>
                <input 
          type="text" 
          required 
          value={String3}
          onChange={(e) => setString3(e.target.value)}
        />
        <br></br>
        <button>Here we Go !</button>
      </form>
    </div>
      <ul>
        <li>{result && <div>{result}</div>}</li>
      </ul>
    </div>

  );
}

 
export default LongestString;