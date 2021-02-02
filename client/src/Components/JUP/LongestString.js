import React, { useState } from 'react'
import {MDBBtn, MDBInput, MDBAlert, MDBCol, MDBRow} from 'mdbreact'


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

	<form onSubmit={handleSubmit} className="form">
		<MDBRow>
			<MDBCol md="10">
				<MDBInput 
					label="type here"
					type="text" 
					required 
					value={String1}
					onChange={(e) => setString1(e.target.value)}
				/>
			</MDBCol>
		</MDBRow>
		<MDBRow>
			<MDBCol md="10">
				<MDBInput 
					label="type here"
					type="text" 
					required 
					value={String2}
					onChange={(e) => setString2(e.target.value)}
				/>
			</MDBCol>
		</MDBRow>
		<MDBRow>
			<MDBCol md="10">
				<MDBInput 
					label="type here"
					type="text" 
					required 
					value={String3}
					onChange={(e) => setString3(e.target.value)}
				/>
			</MDBCol>
		</MDBRow>
		<MDBRow className="align-self-center">
			<MDBCol md="4">
				<MDBBtn type="submit" color="primary" size="lg" className="waves-light btn btn-outline-secondary">Go</MDBBtn>
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
 
export default LongestString