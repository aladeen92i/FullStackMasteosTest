import React, { useState } from 'react'
import {MDBBtn, MDBInput, MDBAlert, MDBCol, MDBRow} from 'mdbreact'

function WhatExtension () {

	const [fileName, setFileName] = useState('')
	const [result, setResult] = useState('')
	const [error, setError] = useState(null)
	const [isLoaded, setIsLoaded] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		const payload = {fileName}

		fetch('http://localhost:8080/whatExtension', {
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
			<form onSubmit={handleSubmit} className="form">
				<MDBRow>
					<MDBCol md="10">
						<MDBInput 
							label="type here"
							type="text" 
							required 
							value={fileName}
							onChange={(e) => setFileName(e.target.value)}
						/>
					</MDBCol>
				</MDBRow>
				<MDBRow className="align-self-center">
					<MDBCol md="4">
						<MDBBtn type="submit" color="primary" size="lg" className="waves-light" color="elegant">Go</MDBBtn>
					</MDBCol>
					<MDBCol md="8">
						{result != 0 ?
						<MDBAlert color="primary" >
								Result : {result}
						</MDBAlert>
						:""}
					</MDBCol>
				</MDBRow>
			</form>
	)
}
 
export default WhatExtension