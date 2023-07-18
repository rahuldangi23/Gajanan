import React, { Component } from 'react';
import styled from 'styled-components';

import service from '../Services/service';
import Input from './InputLogin';
// import Button from './ButtonLogin';

class OrganisationEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OrganisationName: localStorage.getItem("name"),
            email: localStorage.getItem("email"),
            type: localStorage.getItem("type"),
            city: localStorage.getItem("city"),
            state: localStorage.getItem("state"),
            country: localStorage.getItem("country"),
            websiteLink: localStorage.getItem("Website"),
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

    componentDidMount() {
        if (localStorage.getItem("email") == null)
            window.location = './OrganisationLogin';
    }

    submitRegistrationForm = (e) => {
        e.preventDefault();
        service.editOrganisationDetails(this.state).then(data => {
            if (data.data === "Details Updated") {
                localStorage.setItem("email", this.state.email);
                localStorage.setItem("name", this.state.nameOfOrganisation);
                localStorage.setItem("type", this.state.type);
                localStorage.setItem("city", this.state.city);
                localStorage.setItem("state", this.state.state);
                localStorage.setItem("country", this.state.country);
                localStorage.setItem("Website", this.state.websiteLink);
                window.location = "/OrganisationLogin";
            } else {
                alert(data.data);
                window.location = "/OrganisationSignUp";
            }
        }, error => {
            alert(error);
            this.setState({
                errorMessage: "Username or password is not valid"
            });
        });
    }

    render() {
        return (
            <div className="OrgEditCss">
                <MainContainer>
                    <WelcomeText>Edit Details</WelcomeText>
                    <EmailId>{this.state.emailId}</EmailId>
                    <br></br>

                    <form className="formSignUp" onSubmit={(e) => this.submitRegistrationForm(e)}>
                        {/* <Input type="hidden" name="email" value={this.state.value} placeholder="email" onChange={(e) => this.ChangeEmail(e)} status="" /> */}
                        <Input type="text" name="name" value={this.state.value} placeholder="Name Of Organisation" onChange={(e) => this.ChangeName(e)} status="required" />
                        <Input type="text" name="type" value={this.state.value} placeholder="type" onChange={(e) => this.ChangeType(e)} status="" />
                        <Input type="text" name="city" value={this.state.value} placeholder="city" onChange={(e) => this.ChangeCity(e)} status="required" />
                        <Input type="text" name="state" value={this.state.value} placeholder="state" onChange={(e) => this.ChangeState(e)} status="required" />
                        <Input type="text" name="country" value={this.state.value} placeholder="country" onChange={(e) => this.ChangeCountry(e)} status="required" />
                        <Input type="text" name="websitelink" value={this.state.value} placeholder="websitelink" onChange={(e) => this.ChangeWebsiteLink(e)} status="required" />

                        <button type="submit" className="buttonSetCss" > UPDATE </button>
                    </form>
                    {/* <LoginWith> or </LoginWith> */}
                    {/* <HorizantalRule /> */}

                    {/* <ButtonContainer>
                        <Button content="Login As Admin" goto="./AdminLogin" />
                        <Button content="Login As Organisation" goto="./OrganisationLogin" />
                    </ButtonContainer> */}
                </MainContainer>
            </div>
        );
    }
}

const EmailId = styled.div`

`;

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


export default OrganisationEdit;