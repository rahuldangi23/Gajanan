import React, { Component } from 'react';
// import { Navigate } from 'react-router';

import styled from 'styled-components';
import Input from './InputLogin';
import service from '../Services/service';

class EnterOTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OTP: ''
    }
  }

  changeOTP = (event) => {
    this.setState({ OTP: event.target.value }, () => console.log(event.target.value))
  }

  submitOTP = (e) => {
    e.preventDefault();
    service.CheckOTP(this.state.OTP).then(data => {
      if (data.data === "OTP is Correct") {
        window.location = "./NewPassword";
      } else {
        window.location = "./EnterOTP";
        alert(data.data);
      }
    }, error => {
      alert(error);
      this.setState({
        errorMessage: "Username or password is not valid"
      });
    });
  }

  componentDidMount() {
    if (localStorage.getItem("otpEmail") == null) {
      window.location = "./OrganisationLogin";
    }
  }

  render() {
    return (
      <div className="ForgotPasswordCSS" >

        <MainContainer>
          <WelcomeText>ENTER OTP</WelcomeText>
          <br></br>
          <form className="formSignUp" onSubmit={(e) => this.submitOTP(e)}>

            <Input type="text" placeholder="OTP" name="otp" value={this.state.value} onChange={(e) => this.changeOTP(e)} required />

            <button type="submit" className="buttonset" > submit </button>
          </form>
        </MainContainer>
      </div>
    );
  }
}

const MainContainer = styled.div`
              display:flex;
              align-items:center;
              flex-direction:column;
              height:50vh;
              margin:4rem;
              width:30vw;
              background:rgba(225,225,225,0.15);
              box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
              backdrop-filter: blur(8.5px);
              border-radius:10px;
              color: #ffffff;
              text-transform: uppercase;
              letter-spacing: 0.4rem;
              @media only screen and (max-width:320px){
                width:80vw;
                height:160vh;
              
              hr{
                margin-bottom:0.3rem;
              }
              h4{
                font-size:samll;
              }
    }
              @media only screen and (max-width:360px){
                width:80vw;
              height:90vh;
              h4{
                font-size:samll;
        }
      }
              @media only screen and (max-width:411px){
                width:80vw;
              height:90vh;
      }
              @media only screen and (max-width:768px){
                width:80vw;
              height:80vh;
      }
              @media only screen and (max-width:1024px){
                width:30vw;
              height:90vh;
        }
              @media only screen and (max-width:1280px){
                width:30vw;
              height:80vh;
      }
              `;

// const Top = styled.div`
//       margin:4rem 0 0 0;
// `;

const WelcomeText = styled.h2`
              margin:2rem 0 1rem 0;
              color:#e0daf1;
              `;

// const InputContainer = styled.div`
//               display:flex;
//               flex-direction:column;
//               justify-content:space-around;
//               align-items:center;
//               height:10%;
//               width:80%;
//               `;

// const ButtonContainer = styled.div`
//               margin : 0rem 0 0 0.3rem;
//               width:100%;
//               display:flex;
//               align-tems:center;
//               justify-content:center;
//               `;

// const LoginWith = styled.h5`

//               `;

// const HorizantalRule = styled.hr`
//               width:90%;
//               height:0.3rem;
//               border-radius:0.8rem;
//               border:none;
//               margin:1rem 0 1rem 0;
//               background:linear-gradient(to right, #14163 0%, #03217b 79%);
//               backdrop-filter:blur(25px);
//               `;

export default EnterOTP;