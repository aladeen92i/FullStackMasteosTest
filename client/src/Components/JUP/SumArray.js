import React, { useState } from 'react'
import {MDBBtn, MDBInput, MDBAlert, MDBCol, MDBRow} from 'mdbreact'


function SumArray () {

	const [result, setResult] = useState(0)
	const [nestedArray, setNestedArray] = useState('')
	const [error, setError] = useState(null)
	const [isLoaded, setIsLoaded] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		let payload = nestedArray
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

	return (

	<form onSubmit={handleSubmit} className="form">
		<MDBRow>
			<MDBCol md="10">
				<MDBInput 
					label="type here"
					type="text" 
					required 
					value={nestedArray}
					onChange={(e) => setNestedArray(e.target.value)}
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
 
export default SumArray