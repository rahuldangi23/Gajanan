import React, { Component } from 'react';
// import { Navigate } from 'react-router';
import Service from '../Services/service';

import styled from 'styled-components';
import Input from './InputLogin';
// import { Navigate } from 'react-router-dom'

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminId: '',
      password: "",
      errorMessage: ""
    };

    this.ChangeAdminId = this.ChangeAdminId.bind(this);
    this.ChangePassword = this.ChangePassword.bind(this);

  }

  ChangeAdminId = (event) => {
    this.setState({ adminId: event.target.value }, () => console.log(event.target.value))
  }

  ChangePassword = (event) => {
    this.setState({ password: event.target.value }, () => console.log(event.target.value))
  }

  handleLogin = (e) => {
    e.preventDefault();
    Service.checkLoginAdminLogin(this.state).then(data => {
      // alert("data : -> " + data);
      // return <Redirect to="/Home" />
      // this.props.history.push('/Home');
      // return (<Navigate to="/Home" replace={true} />);
      if (data.data === "login success") {
        localStorage.setItem("adminId", this.state.adminId);
        window.location = "/AdminDashboard";

        // localStorage.setItem("type", this.state.type);
      } else {
        alert("Invalid UserName/Password");
        window.location = "/AdminLogin";
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
    // localStorage.setItem("name", this.state.password);
    // localStorage.setItem("type", this.state.type);
  }

  render() {
    return (
      <div className="ForgotPasswordCSS" >

        <MainContainer>
          <WelcomeText>Admin login</WelcomeText>
          <br></br>
          <form onSubmit={(e) => this.handleLogin(e)} className="formSignUp">

            <Input type="text" placeholder="admin Id" name="adminid" value={this.state.value} onChange={(e) => this.ChangeAdminId(e)} required />
            <Input type="text" placeholder="password" name="password" value={this.state.value} onChange={(e) => this.ChangePassword(e)} required />

            <button type="submit" className="buttonset"> Login </button>
          </form>
        </MainContainer>
      </div >
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
export default AdminLogin;