import React, { useState } from 'react'

function LongestString () {

	const [String1, setString1] = useState('')
	const [String2, setString2] = useState('')
	const [String3, setString3] = useState('')
	const [result, setResult] = useState('')
	const [error, setError] = useState(null)
	const [isLoaded, setIsLoaded] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		const stringArray = [String1, String2, String3]

		fetch('http://localhost:8080/longestString', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(stringArray)
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
			<div className="longestString">
				<h2>which is the longest string ?</h2>
				<br></br>
				<form onSubmit={handleSubmit} className="form">
					<label className="form-label">your strings</label>
					<br></br>
					<input
						className="form-input"
						type="text" 
						required 
						value={String1}
						onChange={(e) => setString1(e.target.value)}
					/>
        
					<input 
						className="form-input"
						type="text" 
						required 
						value={String2}
						onChange={(e) => setString2(e.target.value)}
					/>
      
					<input 
						className="form-input"
						type="text" 
						required 
						value={String3}
						onChange={(e) => setString3(e.target.value)}
					/>
					<button className="button button_center">Here we Go !</button>
				</form>
			</div>
			{result && <div>{result}</div>}
		</div>
	)
}
 
export default LongestString