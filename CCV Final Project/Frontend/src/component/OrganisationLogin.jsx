import React, { Component } from 'react';
// import { Navigate } from 'react-router';

import styled from 'styled-components';
import Button from './ButtonLogin';
import Input from './InputLogin';
import Service from '../Services/service';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    };

    this.ChangeEmail = this.ChangeEmail.bind(this);
    this.ChangePassword = this.ChangePassword.bind(this);

  }

  ChangeEmail = (event) => {
    this.setState({ email: event.target.value }, () => console.log(event.target.value))
  }

  ChangePassword = (event) => {
    this.setState({ password: event.target.value }, () => console.log(event.target.value))
  }

  handleLogin = (e) => {
    e.preventDefault();
    Service.checkLoginCredOrganisation(this.state).then(data => {
      if (data.data.email === this.state.email) {
        localStorage.setItem("email", data.data.email);
        localStorage.setItem("name", data.data.nameOfOrganisation);
        localStorage.setItem("type", data.data.type);
        localStorage.setItem("city", data.data.city);
        localStorage.setItem("state", data.data.state);
        localStorage.setItem("country", data.data.country);
        localStorage.setItem("Website", data.data.websiteLink);
        // alert("successful");
        // localStorage.setItem("email", data.data.email);
        // localStorage.setItem("nameOfOrganisation", data.data);
        window.location = "/DashBoardOrganisation";
      } else {
        // window.location = "/OrganisationLogin";
        alert("Invalid UserName/Password");
      }
      // return (<Navigate to="../component/OrganisationDashboard.jsx" />);
    }, error => {
      alert(error);
      this.setState({
        errorMessage: "Username or password is not valid"
      });
    });
  }

  componentDidMount() {
    localStorage.clear();
  }

  render() {
    return (
      <div className="LoginPage" >
        <MainContainer>
          <WelcomeText>WELCOME</WelcomeText>
          <form onSubmit={(e) => this.handleLogin(e)} >
            <InputContainer>
              <Input type="text" name="email" placeholder="Email" value={this.state.value} onChange={(e) => this.ChangeEmail(e)} required />
              <Input type="password" name="password" placeholder="Password" value={this.state.value} onChange={(e) => this.ChangePassword(e)} required />
            </InputContainer>
            <ButtonContainer>
              <Button content="Sign In" />
            </ButtonContainer>
          </form>
          <LoginWith> or </LoginWith>
          <HorizantalRule />
          <a href='./ForgotPassword'><ForgotPassword>Forgot Password</ForgotPassword></a>

          <ButtonContainer>
            <Button content="Login As Admin" goto="AdminLogin" />
            <Button content="Register As Organisation" goto="OrganisationSignUp" />
          </ButtonContainer>
        </MainContainer>
      </div >
    );
  }
}

const MainContainer = styled.div`
          display:flex;
          align-items:center;
          flex-direction:column;
          height:75vh;
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
            height:90vh;
          
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

const WelcomeText = styled.h2`
          margin:3rem 0 3rem 0;
          `;

const InputContainer = styled.div`
          display:flex;
          flex-direction:column;
          justify-content:space-around;
          align-items:center;
          height:20%;
          width:100%;
          `;

const ButtonContainer = styled.div`
          margin : 1rem 0 0 0.3rem;
          width:100%;
          display:flex;
          align-tems:center;
          justify-content:center;
          `;

const LoginWith = styled.h5`

          `;

const HorizantalRule = styled.hr`
          width:90%;
          height:0.3rem;
          border-radius:0.8rem;
          border:none;
          margin:1rem 0 1rem 0;
          background:linear-gradient(to right, #14163 0%, #03217b 79%);
          backdrop-filter:blur(25px);
          `;

// const IconsContainer = styled.div`
//       display:flex;
//       justify-content:space-evenly;
//       margin:2rem 0 3rem 0;
//       width:80%
//       `;

const ForgotPassword = styled.h4`
          cursor:pointer;
          font-size:1.2rem;
          color:#ffffff;
          `;


export default Login;