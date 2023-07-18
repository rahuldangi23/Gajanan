import React, { Component } from 'react';

import styled from 'styled-components';
import service from '../Services/service';
// import Button from './ButtonLogin';
import Input from './InputLogin';

class EditStudentRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: localStorage.getItem("uid"),
            rollNo: '',
            FirstName: '',
            LastName: '',
            DateOfBirth: '',
            Institute: '',
            Grade: '',
            PassingYear: '',
            course: ''
        }
    }

    ChangerollNo = (event) => {
        this.setState({ rollNo: event.target.value }, () => console.log(event.target.value))
    }

    ChangeFirstName = (event) => {
        this.setState({ FirstName: event.target.value }, () => console.log(event.target.value))
    }

    ChangeLastName = (event) => {
        this.setState({ LastName: event.target.value }, () => console.log(event.target.value))
    }

    ChangeDateOfBirth = (event) => {
        this.setState({ DateOfBirth: event.target.value }, () => console.log(event.target.value))
    }

    Changecourse = (event) => {
        this.setState({ course: event.target.value }, () => console.log(event.target.value))
    }

    ChangeInstitute = (event) => {
        this.setState({ Institute: event.target.value }, () => console.log(event.target.value))
    }

    ChangeGrade = (event) => {
        this.setState({ Grade: event.target.value }, () => console.log(event.target.value))
    }

    ChangePassingYear = (event) => {
        this.setState({ PassingYear: event.target.value }, () => console.log(event.target.value))
    }

    submitRegistrationForm = (e) => {
        e.preventDefault();
        service.EditStudentRecord(this.state).then(data => {
            if (data.data === "Update Successful") {
                alert(data.data);
                // window.location = "/OrganisationLogin";
            } else {
                alert("not updated");
                // window.location = "/OrganisationSignUp";

            }
        }, error => {
            alert(error);
            this.setState({
                errorMessage: "Username or password is not valid"
            });
        });
    }

    updateRegistrationForm = (e) => {

        service.EditStudentRecord(this.state.uid).then(data => {

            if (data.data === "Update Successful") {
                alert("Record updated")
                localStorage.removeItem("uid")
                // window.location = './FindAllStudent'
            }
            else
                alert("edit not possible")
        }, error => {
            alert(error)
            this.setState({
                errorMessage: 'error occur'
            })
        });
    }


    componentDidMount() {

    }

    render() {
        return (
            <div className="SignUporg" >

                <MainContainer>
                    <WelcomeText>Update Record</WelcomeText>
                    <Uidvalue>{this.state.uid}</Uidvalue>
                    <br></br>
                    <form className="formSignUp" onSubmit={(e) => this.updateRegistrationForm(e)}>

                        <Input type="text" name="rollNo" value={this.state.value} placeholder="rollNo" onChange={(e) => this.ChangerollNo(e)} required />
                        <Input type="text" name="FirstName" value={this.state.value} placeholder="FirstName" onChange={(e) => this.ChangeFirstName(e)} required />
                        <Input type="text" name="LastName" value={this.state.value} placeholder="LastName" onChange={(e) => this.ChangeLastName(e)} required />
                        <Input type="text" name="DateOfBirth" value={this.state.value} placeholder="DateOfBirth" onChange={(e) => this.ChangeDateOfBirth(e)} required />
                        <Input type="text" name="course" value={this.state.value} placeholder="course" onChange={(e) => this.Changecourse(e)} required />
                        <Input type="text" name="Institute" value={this.state.value} placeholder="Institute" onChange={(e) => this.ChangeInstitute(e)} required />
                        <Input type="text" name="Grade" value={this.state.value} placeholder="Grade" onChange={(e) => this.ChangeGrade(e)} required />
                        <Input type="text" name="PassingYear" value={this.state.value} placeholder="PassingYear" onChange={(e) => this.ChangePassingYear(e)} required />

                        <button type="submit" className="buttonset" > Update </button>
                    </form>
                </MainContainer>
            </div>
        );
    }
}


const Uidvalue = styled.div`

`;
const MainContainer = styled.div`
                  display:flex;
                  align-items:center;
                  flex-direction:column;
                  height:100vh;
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
//                   margin : 0rem 0 0 0.3rem;
//                   width:100%;
//                   display:flex;
//                   align-tems:center;
//                   justify-content:center;
//                   `;

// const LoginWith = styled.h5`

//                   `;

// const HorizantalRule = styled.hr`
//                   width:90%;
//                   height:0.3rem;
//                   border-radius:0.8rem;
//                   border:none;
//                   margin:1rem 0 1rem 0;
//                   background:linear-gradient(to right, #14163 0%, #03217b 79%);
//                   backdrop-filter:blur(25px);
//                   `;


export default EditStudentRecord;