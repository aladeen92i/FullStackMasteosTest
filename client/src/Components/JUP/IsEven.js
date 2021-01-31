import React, { useState } from 'react'

function IsEven () {

	const [isEven, setIsEven] = useState(0)
	const [result, setResult] = useState(0)
	const [error, setError] = useState(null)
	const [isLoaded, setIsLoaded] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		const payload = {isEven}

		fetch('http://localhost:8080/isNumberEven', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
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
		if(error){
			console.log(error)
			console.log(isLoaded)
		}
	}

	// conditional rendering

	return (
		<div className="container">
			<div className="isEven">
				<h2>Is your Number Even ?</h2>
				<form onSubmit={handleSubmit} className="form">
					<label className="form-label">your number</label>
					<input
						className="form-input"
						type="number" 
						required 
						value={isEven}
						onChange={(e) => setIsEven(e.target.value)}
					/>
					<button className="button button_center">Here we Go !</button>
				</form>
			</div>
			{result && <div>{result}</div>}
		</div>

	)
}

 
export default IsEven