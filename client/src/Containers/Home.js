import React from 'react';
import { MDBContainer, MDBView, MDBMask, MDBIcon, MDBBtn} from 'mdbreact'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    })
  }

  render() {
    return (
      <div>
          <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg">
            <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
              <h2>Welcome on Aladeen Website</h2>
              
              <br />
            <MDBContainer className="text-center my-5">
              <p align="center">
              <h5>Remember to check my socials before leaving !</h5>
                <a href="https://twitter.com/aladeen92i" target="_blank" className="tw-ic mr-3">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="https://www.linkedin.com/in/quentin-becquart-446255109/" target="_blank" className="li-ic mr-3">
                  <MDBIcon fab icon="linkedin-in" />
                </a>
                <a href="https://github.com/zeley93" target="_blank" className="git-ic mr-3">
                  <MDBIcon fab icon="github" />
                </a>
              </p>
            </MDBContainer>
            </MDBMask>
          </MDBView>
      </div>
    )
  }
}

export default Home;
