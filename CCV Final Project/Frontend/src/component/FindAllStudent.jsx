import React, { Component } from 'react';
import service from '../Services/service';

class FindAllStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Student: [],
            adminId: localStorage.getItem("adminId"),
            errorMessage: ''
        }
    }
    componentDidMount() {
        if (localStorage.getItem("adminId") == null)
            window.location = './AdminLogin'
        else
            service.getAllStudent().then((res) => {
                this.setState({ Student: res.data });
            });
    }

    deleteStudentRecord = (e, uid) => {
        e.preventDefault();
        service.deleteStudentRecord(uid).then(data => {
            if (data.data === "deleted") {
                alert("done")
                window.location = './FindAllStudent'
            } else
                alert(data.data)
        }, error => {
            alert(error)
            this.setState({
                errorMessage: 'error occur can not delete'
            });
        })
    }

    editStudent = (e, uid) => {
        localStorage.setItem("uid", uid);
        window.location = './EditStudentRecord'
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Student List</h2>
                <div> <a href="./AddNewStudent" className="buttonDashboard" > Add Student </a></div>
                <br /><br />
                <div className="row">
                    <br /><br />
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th> UID </th>
                                <th> Roll Number </th>
                                <th> First Name </th>
                                <th> Last Name </th>
                                <th> Data Of Birth </th>
                                <th> Course </th>
                                <th> Institute </th>
                                <th> Passying Year </th>
                                <th> Grade </th>
                                <th> Delete </th>
                                <th> Edit </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Student.map(
                                    stu =>
                                        <tr key={"stu.uid"}>
                                            <td> {stu.uid} </td>
                                            <td> {stu.rollNo} </td>
                                            <td> {stu.firstName} </td>
                                            <td> {stu.lastName} </td>
                                            <td> {stu.dateOfBirth.slice(0, 10)} </td>
                                            <td> {stu.studentCourse.course} </td>
                                            <td> {stu.institute} </td>
                                            <td> {stu.passingYear} </td>
                                            <td> {stu.grade} </td>
                                            <td> <button onClick={(e) => this.deleteStudentRecord(e, stu.uid)} > Delete </button></td>
                                            <td> <button onClick={(e) => this.editStudent(e, stu.uid)} > Edit </button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default FindAllStudent;