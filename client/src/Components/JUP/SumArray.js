import React, { useState } from 'react'

function SumArray () {

	const [result, setResult] = useState(0)
	const [String1, setString1] = useState('')
	const [error, setError] = useState(null)
	const [isLoaded, setIsLoaded] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		var payload = String1
		//console.log(JSON.stringify({ payload: "[" + payload + "]" }))
		fetch('http://localhost:8080/arraySum', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ payload: '[' + payload + ']' })
		})
			.then((res) => res.json())
			.then((res) => {
				setIsLoaded(true)
				setResult(res)
			}, (error) => {
				setIsLoaded(true)
				setError(error)
			})
		if(error){
			console.log(error)
			console.log(isLoaded)
		}
	}

	// conditional rendering

	return (
		<div className="container">
			<div className="sumArray">
				<h2>Array Nesting ! </h2>
				<br></br>
				<h2> i will be an array, containing integers, strings and/or arrays like itself.
          Sum all the integers you find, anywhere in the nest of arrays.
				<br></br>
          Write it like this : 1,2,3,4 for simple sum or 1,2,[1,2,3] for nested arrays otherwise it will not work
				</h2>
        
				<form onSubmit={handleSubmit} className="form">
					<label className="form-label">your numbers and/or arrays</label>
					<input 
						className="form-input"
						type="text" 
						required 
						value={String1}
						onChange={(e) => setString1(e.target.value)}
					/>
					<button className="button button_center"> Here we Go !</button>
				</form>
			</div>
			{result && <div>{result}</div>}
		</div>

	)
}

 
export default SumArray