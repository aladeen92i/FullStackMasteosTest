import { useState } from "react";

function WhatExtension () {

  const [fileName, setFileName] = useState("")
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [result, setResult] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {fileName}

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
    <div className="container">
      <div className="whatExtension">
        <h2>What kind of extension is this ? (submit filename along with his .extension)</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="form-label">your filename</label>
          <input
            className="form-input"
            type="text" 
            required 
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          />
          <button className="button button_center">Here we Go !</button>
        </form>
      </div>
        {result && <div>{result}</div>}
    </div>

  );
}

 
export default WhatExtension;