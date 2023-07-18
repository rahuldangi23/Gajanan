import React, { Component } from 'react';
// import { Navigate } from 'react-router';

import styled from 'styled-components';
import Input from './InputLogin';
import service from '../Services/service';

class NewVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: '',
      rollNo: 0,
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      course: '',
      institute: '',
      grade: '',
      passingYear: ''
    }
  }

  ChangeUID = (event) => {
    this.setState({ uid: event.target.value }, () => console.log(event.target.value))
  }

  ChangeRoll = (event) => {
    this.setState({ rollNo: event.target.value }, () => console.log(event.target.value))
  }

  ChangefirstName = (event) => {
    this.setState({ firstName: event.target.value }, () => console.log(event.target.value))
  }

  ChangeLastName = (event) => {
    this.setState({ lastName: event.target.value }, () => console.log(event.target.value))
  }

  ChangeDOB = (event) => {
    this.setState({ dateOfBirth: event.target.value }, () => console.log(event.target.value))
  }

  ChangeInstitute = (event) => {
    this.setState({ institute: event.target.value }, () => console.log(event.target.value))
  }

  ChangeGrade = (event) => {
    this.setState({ grade: event.target.value }, () => console.log(event.target.value))
  }

  ChangePassingYear = (event) => {
    this.setState({ passingYear: event.target.value }, () => console.log(event.target.value))
  }

  ChangeCourse = (event) => {
    this.setState({ course: event.target.value }, () => console.log(event.target.value))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.uid == null ||
      parseInt(this.state.rollNo) === 0 ||
      this.state.firstName == null ||
      this.state.lastName == null ||
      this.state.dateOfBirth == null ||
      this.state.course == null ||
      this.state.institute == null ||
      this.state.grade == null ||
      this.state.passingYear == null) {
      alert("blank filed not allowed");
      return;
    }

    service.checkNewVerification(this.state).then(data => {
      if (data.data.uid === this.state.uid &&
        parseInt(data.data.rollNo) === parseInt(this.state.rollNo) &&
        data.data.firstName === this.state.firstName &&
        data.data.lastName === this.state.lastName &&
        // data.data.dateOfBirth.slice(0, 10) === this.state.dateOfBirth &&
        data.data.studentCourse.course === this.state.course &&
        data.data.institute === this.state.institute &&
        data.data.grade === this.state.grade &&
        data.data.passingYear === this.state.passingYear) {
        alert(`${data.data.uid} is found`);
        window.location = "/DashBoardOrganisation";
      } else {
        alert("Record Not Found");
      }
    }, error => {
      alert(error);
      this.setState({
        errorMessage: "Invalid data"
      });
    });
  }

  componentDidMount() {
    if (localStorage.getItem("email") == null)
      window.location = './OrganisationLogin';
  }

  render() {
    return (
      <div className="NewVeficationCSS" >
        <MainContainer>
          <WelcomeText>Serach Candidate</WelcomeText>
          <br></br>
          <form className="formSignUp" onSubmit={(e) => this.handleSubmit(e)}>
            <Input type="text" name="uid" placeholder="UID" value={this.state.value} onChange={(e) => this.ChangeUID(e)} status="required" />
            <Input type="text" name="rollNo" placeholder="Roll Number" value={this.state.value} onChange={(e) => this.ChangeRoll(e)} status="required" />
            <Input type="text" name="firstName" placeholder="First Name" value={this.state.value} onChange={(e) => this.ChangefirstName(e)} status="required" />
            <Input type="text" name="lastName" placeholder="Last Name" value={this.state.value} onChange={(e) => this.ChangeLastName(e)} status="required" />
            <Input type="text" name="dateOfBirth" placeholder="Date Of Birth (YYYY-MM-DD)" value={this.state.value} onChange={(e) => this.ChangeDOB(e)} status="required" />
            <Input type="text" name="course" placeholder="course" value={this.state.value} onChange={(e) => this.ChangeCourse(e)} status="required" />
            <Input type="text" name="institute" placeholder="Institute" value={this.state.value} onChange={(e) => this.ChangeInstitute(e)} status="required" />
            <Input type="text" name="grade" placeholder="Grade" value={this.state.value} onChange={(e) => this.ChangeGrade(e)} status="required" />
            <Input type="text" name="passingYear" placeholder="Passing Year" value={this.state.value} onChange={(e) => this.ChangePassingYear(e)} status="required" />
            <button type="submit" className="buttonset" > serach </button>
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
              margin:2rem 0 1rem 0;
              color:#e0daf1;
              `;
export default NewVerification;