import React, { Component } from 'react';
import service from '../Services/service';

class FindAllOrganisation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Organisation: [],
            adminId: localStorage.getItem("adminId")
        }
    }

    deleteOrganisation = (e, uid) => {
        e.preventDefault();
        service.deleteOrganisation(uid).then(data => {
            if (data.data === "deleted") {
                alert("done")
                window.location = './FindAllOrganisation'
            } else
                alert(data.data)
        }, error => {
            alert(error)
            this.setState({
                errorMessage: 'error occur can not delete'
            });
        })
    }

    componentDidMount() {
        if (localStorage.getItem("adminId") == null)
            window.location = './AdminLogin'
        else
            service.getAllOrganisation().then((res) => {
                this.setState({ Organisation: res.data });
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Organisation List</h2>
                <div className="row">
                    <br /><br />
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th> Name </th>
                                <th> type </th>
                                <th> City </th>
                                <th> State </th>
                                <th> Country </th>
                                <th> WebSite Link </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
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
                                            <td> <input type="submit" onClick={(e) => this.deleteOrganisation(e, org.email)} value="Delete" /> </td>
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

export default FindAllOrganisation;