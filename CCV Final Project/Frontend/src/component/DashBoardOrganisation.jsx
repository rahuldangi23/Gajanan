import React, { Component } from 'react';

// import service from '../Services/service';
// import NewVerification from './NewVerification';


class DashBoardOrganisation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            OrganisationName: '',
            // orgData: '',
            emailId: '',
            type: '',
            city: '',
            state: '',
            country: '',
            websiteLink: '',
        }
    }

    componentDidMount() {
        this.setState({
            emailId: localStorage.getItem("email"),
            OrganisationName: localStorage.getItem("name"),
            type: localStorage.getItem("type"),
            city: localStorage.getItem("city"),
            state: localStorage.getItem("state"),
            country: localStorage.getItem("country"),
            websiteLink: localStorage.getItem("Website")
        })
        if (localStorage.getItem("email") == null) {
            window.location = "./OrganisationLogin";
        }
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Organisation Profile</h2>
                <div className="row">
                    <br /><br />
                    {/*code to jump to edit data*/}
                    <div>
                        <a className="buttonDashboard" href="./OrganisationEdit"> edit</a>
                        <a className="buttonDashboard" href="./NewVerification"> New Verification</a>
                    </div>
                    <table className='table table-striped table-bordered'>
                        <tr>
                            <td> Name  </td>
                            <td> {this.state.OrganisationName} </td>
                        </tr>
                        <tr>
                            <td> type  </td>
                            <td> {this.state.type} </td>
                        </tr>
                        <tr>
                            <td> City  </td>
                            <td> {this.state.city}  </td>
                        </tr>
                        <tr>
                            <td> State  </td>
                            <td> {this.state.state}  </td>
                        </tr>
                        <tr>
                            <td> Country  </td>
                            <td> {this.state.country}  </td>
                        </tr>
                        <tr>
                            <td> WebSite Link  </td>
                            <td> {this.state.websiteLink} </td>
                        </tr>

                        {/* <tbody>
                                {
                                    this.state.Organisation.map(
                                        org =>
                                            <tr key={"org.email"}>
                                                <td> {org.nameOfOrganisation} </td>
                                                <td> {org.type} </td>
                                                <td> {org.city} </td>
                                                <td> {org.state} </td>
                                                <td> {org.country} </td>
                                                <td> {org.websiteLink} </td>
                                                <td> </td>
                                                <td> </td>
                                            </tr>
                                    )
                                }
                            </tbody> */}

                    </table>
                </div>
            </div >
        );
    }
}

export default DashBoardOrganisation;