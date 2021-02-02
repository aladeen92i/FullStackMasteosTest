import React, { useState } from 'react'
import {MDBBtn, MDBIcon, MDBInput, MDBAlert, MDBCol, MDBRow, MDBView, MDBMask} from 'mdbreact'

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
	<MDBRow>
		<MDBCol lg="5">
			<form onSubmit={handleSubmit} className="form">
				<MDBRow>
					<MDBCol md="8">
						<MDBInput 
							label="type here"
							type="number" 
							required 
							value={toDouble}
							onChange={(e) => setToDouble(e.target.value)}
						/>
					</MDBCol>
					<MDBCol md="2">
						<MDBBtn type="submit" color="primary" size="lg" className="waves-light btn btn-outline-secondary">Go</MDBBtn>
					</MDBCol>
					<MDBRow>
						<MDBCol >
							{result != 0 ?
							<MDBAlert color="primary" >
									Result : {result}
							</MDBAlert>
							:""}
						</MDBCol>
					</MDBRow>
				</MDBRow>
			</form>
		</MDBCol>
	</MDBRow>
	)
}
 
export default DoubleIt
