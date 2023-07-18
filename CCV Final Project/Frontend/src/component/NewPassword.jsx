import React, { Component } from 'react';
// import { Navigate } from 'react-router';

import styled from 'styled-components';
import service from '../Services/service';
import Input from './InputLogin';

class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      RePassword: '',
      errorMessage: '',
    }
  }

  ChangePassword = (event) => {
    this.setState({
      password: event.target.value
    }, () => console.log(this.state.password));
  }

  changeRePassword = (event) => {
    this.setState({
      RePassword: event.target.value
    }, () => console.log(this.state.RePassword));
  }

  submitNewPassword = (event) => {
    event.preventDefault();
    this.setState({
      email: localStorage.getItem("otpEmail")
    })
    alert(this.state);
    service.checkPassword(this.state).then(data => {
      alert(data.data);
      if (data.data === "Password Changed Successfully") {
        alert("Password Changed Successfully");
        window.location = "./OrganisationLogin";
      } else {
        //window.location = "/OrganisationSignUp";
        alert("else part " + data.data);
      }
    }, error => {
      alert(error);
      this.setState({
        errorMessage: "Error Occured in this page"
      });
    });

  }

  componentDidMount() {
    if (localStorage.getItem("otpEmail") == null)
      window.location = "./OrganisationLogin";
    if (localStorage.getItem("email") != null)
      localStorage.clear();
  }

  render() {
    return (
      <div className="ForgotPasswordCSS" >

        <MainContainer>
          <WelcomeText>new password</WelcomeText>
          <br></br>
          <form className="formSignUp" onSubmit={(e) => this.submitNewPassword(e)}>
            <Input type="text" placeholder="Enter Password" name="password" onChange={(e) => this.ChangePassword(e)} required />
            <Input type="password" placeholder="Re-Enter Password" name="RePassword" onChange={(e) => this.changeRePassword(e)} required />
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

export default NewPassword;