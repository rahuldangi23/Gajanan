import React, { Component } from 'react';

class OrganisationDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameOfOrganisation: localStorage.getItem("email"),
            type: localStorage.getItem("type"),
            email: localStorage.getItem("email"),
            city: localStorage.getItem("city"),
            state: localStorage.getItem("state"),
            country: localStorage.getItem("country"),
            websiteLink: localStorage.getItem("websiteLink")
        }
    }

    componentDidMount() {
        if (localStorage.getItem("email"))
            window.location = './OrganisationSignUp'
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Dashboard</h2>
                <div> <a href="./OrganisationEdit" className="buttonDashboard" > Add Student </a>
                    <a href="./NewVefication" className="buttonDashboard" > Add Student </a></div>
                <div className="row">
                    <br /><br />
                    <table className='table table-striped table-bordered'>
                        <tr>
                            <th> Name </th>
                            <td> {this.state.nameOfOrganisation} </td>
                        </tr>
                        <tr>
                            <th> Type </th>
                            <td> {this.state.type} </td>
                        </tr>
                        <tr>
                            <th> City </th>
                            <td> {this.state.city} </td>
                        </tr>
                        <tr>
                            <th> City </th>
                            <td> {this.state.state} </td>
                        </tr>
                        <tr>
                            <th> City </th>
                            <td> {this.state.country} </td>
                        </tr>
                        <tr>
                            <th> City </th>
                            <td> {this.state.websiteLink} </td>
                        </tr>
                    </table>
                </div>
            </div >
        );
    }
}

export default OrganisationDashboard;