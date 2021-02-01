import React, { useState } from 'react'

function DoubleIt () {

	const [toDouble, setToDouble] = useState(0)
	const [error, setError] = useState(null)
	const [isLoaded, setIsLoaded] = useState(false)
	const [result, setResult] = useState(0)

	const handleSubmit = (e) => {
		e.preventDefault()
		const payload = {toDouble}
		fetch('http://localhost:8080/doubleIt', {
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

	return (
		<div className="container">
			<div className="doubleIt">
				<h2>Double Your number !</h2>
				<form onSubmit={handleSubmit} className="form">
					<label className="form-label">type your number here</label>
					<input 
						className="form-input"
						type="number" 
						required 
						value={toDouble}
						onChange={(e) => setToDouble(e.target.value)}
					/>
					<button className="button button_center">Here we Go !</button>
				</form>
			</div>
			{result && <div>{result}</div>}
		</div>
	)
}
 
export default DoubleIt