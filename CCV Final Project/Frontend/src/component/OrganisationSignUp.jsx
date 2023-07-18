import React, { Component } from 'react';
// import { Navigate } from 'react-router';

import styled from 'styled-components';
import service from '../Services/service';
import Button from './ButtonLogin';
import Input from './InputLogin';

class OrganisationSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      type: '',
      city: '',
      state: '',
      country: '',
      websiteLink: ''
    }
  }

  ChangeEmail = (event) => {
    this.setState({ email: event.target.value }, () => console.log(event.target.value))
  }

  Changepassword = (event) => {
    this.setState({ password: event.target.value }, () => console.log(event.target.value))
  }

  ChangeName = (event) => {
    this.setState({ name: event.target.value }, () => console.log(event.target.value))
  }

  ChangeType = (event) => {
    this.setState({ type: event.target.value }, () => console.log(event.target.value))
  }

  ChangeCity = (event) => {
    this.setState({ city: event.target.value }, () => console.log(event.target.value))
  }

  ChangeState = (event) => {
    this.setState({ state: event.target.value }, () => console.log(event.target.value))
  }

  ChangeCountry = (event) => {
    this.setState({ country: event.target.value }, () => console.log(event.target.value))
  }

  ChangeWebsiteLink = (event) => {
    this.setState({ websiteLink: event.target.value }, () => console.log(event.target.value))
  }

  submitRegistrationForm = (e) => {
    e.preventDefault();
    service.createNewOrganisationRecord(this.state).then(data => {
      if (data.data === "Profile Created") {
        window.location = "/OrganisationLogin";
      } else {
        window.location = "/OrganisationSignUp";
        alert("Invalid UserName/Password");
      }
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
      <div className="SignUporg" >

        <MainContainer>
          <WelcomeText>sign up</WelcomeText>
          <br></br>
          <form className="formSignUp" onSubmit={(e) => this.submitRegistrationForm(e)}>

            <Input type="text" name="email" placeholder="Email" value={this.state.value} onChange={(e) => this.ChangeEmail(e)} required />
            <Input type="password" name="password" value={this.state.value} placeholder="Password" onChange={(e) => this.Changepassword(e)} required />
            <Input type="text" name="name" value={this.state.value} placeholder="Name Of Organisation" onChange={(e) => this.ChangeName(e)} required />
            <Input type="text" name="type" value={this.state.value} placeholder="type" onChange={(e) => this.ChangeType(e)} required />
            <Input type="text" name="city" value={this.state.value} placeholder="city" onChange={(e) => this.ChangeCity(e)} required />
            <Input type="text" name="state" value={this.state.value} placeholder="state" onChange={(e) => this.ChangeState(e)} required />
            <Input type="text" name="country" value={this.state.value} placeholder="country" onChange={(e) => this.ChangeCountry(e)} required />
            <Input type="text" name="websitelink" value={this.state.value} placeholder="websitelink" onChange={(e) => this.ChangeWebsiteLink(e)} required />

            <button type="submit" className="buttonset" > SIGN UP</button>
          </form>
          <LoginWith> or </LoginWith>
          <HorizantalRule />

          <ButtonContainer>
            <Button content="Login As Admin" goto="./AdminLogin" />
            <Button content="Login As Organisation" goto="./OrganisationLogin" />
          </ButtonContainer>
        </MainContainer>
      </div>
    );
  }
}

const MainContainer = styled.div`
              display:flex;
              align-items:center;
              flex-direction:column;
              height:115vh;
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
              margin:1rem 0 1rem 0;
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

const ButtonContainer = styled.div`
              margin : 0rem 0 0 0.3rem;
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

// const ForgotPassword = styled.h4`
//               cursor:pointer;
//               font-size:1.2rem;
//               `;




export default OrganisationSignUp;