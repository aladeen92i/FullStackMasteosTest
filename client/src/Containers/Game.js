import React from 'react'
import DoubleIt from '../Components/JUP/DoubleIt'
import IsEven from '../Components/JUP/IsEven'
import LongestString from '../Components/JUP/LongestString'
import SumArray from '../Components/JUP/SumArray'
import WhatExtension from '../Components/JUP/WhatExtension'
import {MDBCard, MDBCardBody, MDBRow, MDBCol, MDBView, MDBMask, MDBIcon} from "mdbreact";

const Game = () => {
	return (
		<MDBCard className="my-5 px-5 pb-5">
		<MDBCardBody>
		  <h2 className="h1-responsive font-weight-bold text-center my-5">
			Recent posts
		  </h2>
		  <p className="text-center w-responsive mx-auto mb-5">
			Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit
			anim id est laborum.
		  </p>
		  <hr className="my-5"/>
		  <MDBRow>
			<MDBCol lg="3">
			  <MDBView className="rounded z-depth-2" hover waves>
				<img
				  className="img-fluid"
				  src={process.env.PUBLIC_URL + '/images/doubleIt.png'}
				  alt=""
				/>
				<a href="#!">
				  <MDBMask overlay="white-slight" />
				</a>
			  </MDBView>
			</MDBCol>
			<MDBCol lg="3">
			  <strong className="pr-3">
				<h6 className="font-weight-bold mb-3">
				  <MDBIcon icon="code" className="pr-2" />
				  1st Function
				</h6>
			  </strong>
			  <h3 className="font-weight-bold mb-3 p-0">
				<strong>Double your Number !</strong>
			  </h3>
			  <DoubleIt />
			</MDBCol>

		  <hr className="my-6" />
		  <MDBCol lg="3">
			  <MDBView className="rounded z-depth-2" hover waves>
				<img
				  className="img-fluid"
				  src={process.env.PUBLIC_URL + '/images/isEven.png'}
				  alt=""
				/>
				<a href="#!">
				  <MDBMask overlay="white-slight" />
				</a>
			  </MDBView>
			</MDBCol>
			<MDBCol lg="3">
			  <strong className="pr-3">
				<h6 className="font-weight-bold mb-3">
				  <MDBIcon icon="code" className="pr-2" />
				  2nd Function
				</h6>
			  </strong>
			  <h3 className="font-weight-bold mb-3 p-0">
				<strong>Is your number even ?</strong>
			  </h3>
			  <IsEven />
			</MDBCol>

		  </MDBRow>
		  <hr className="my-7" />
		  <MDBRow>
		  	<MDBCol lg="3">
			  <MDBView className="rounded z-depth-2" hover waves>
				<img
				  className="img-fluid"
				  src={process.env.PUBLIC_URL + '/images/whatExtension.png'}
				  alt=""
				/>
				<a href="#!">
				  <MDBMask overlay="white-slight" />
				</a>
			  </MDBView>
			</MDBCol>
			<MDBCol lg="3">
			  <strong className="">
				<h6 className="font-weight-bold mb-3 pr-3">
				  <MDBIcon icon="code" className="pr-2" />
				  3rd Function
				</h6>
			  </strong>
			  <h5 className="font-weight-bold mb-3 p-3">
				What kind of extension is this ? (submit filename along with his .extension)
			  </h5>
			  <WhatExtension />
			</MDBCol>
		  


		  <hr className="my-8" />
		  	<MDBCol lg="3">
			  <MDBView className="rounded z-depth-2" hover waves>
				<img
				  className="img-fluid"
				  src={process.env.PUBLIC_URL + '/images/longestString.png'}
				  alt=""
				/>
				<a href="#!">
				  <MDBMask overlay="white-slight" />
				</a>
			  </MDBView>
			</MDBCol>
			<MDBCol lg="3">
			  <strong className="">
				<h6 className="font-weight-bold mb-3 pr-3">
				  <MDBIcon icon="code" className="pr-2" />
				  4th Function
				</h6>
			  </strong>
			  <h5 className="font-weight-bold mb-3 p-3">
				Which is the longest string ?
			  </h5>
			  <LongestString />
			</MDBCol>
		  </MDBRow>

		  <hr className="my-8" />
		  <MDBRow>
		  	<MDBCol lg="3">
			  <MDBView className="rounded z-depth-2" hover waves>
				<img
				  className="img-fluid"
				  src={process.env.PUBLIC_URL + '/images/sumNestedArrays.png'}
				  alt=""
				/>
				<a href="#!">
				  <MDBMask overlay="white-slight" />
				</a>
			  </MDBView>
			</MDBCol>
			<MDBCol lg="3">
			  <strong className="">
				<h6 className="font-weight-bold mb-3 pr-3">
				  <MDBIcon icon="code" className="pr-2" />
				  5th Function
				</h6>
			  </strong>
			  <h5 className="font-weight-bold mb-3 p-3">
				Sum Nested Arrays ! i will be an array, containing integers, strings and/or arrays like itself.Sum all the integers you find, anywhere in the nest of arrays.
			  </h5>
			  <SumArray />
			</MDBCol>
		  </MDBRow>

		  


		</MDBCardBody>
	  </MDBCard>
	)
}
 
export default Game
