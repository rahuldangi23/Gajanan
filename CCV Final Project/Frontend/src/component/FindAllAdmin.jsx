import React, { Component } from 'react';
import service from '../Services/service';

class FindAllAdmin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Admin: [],
            adminId: localStorage.getItem("adminId"),
            errorMessage: '',
            delete: 0
        }
    }

    componentDidMount() {
        if (localStorage.getItem("adminId") == null)
            window.location = './AdminLogin'
        else {
            service.getAllAdmin().then((res) => {
                this.setState({ Admin: res.data });
            });
        }
    }

    // deleteClick = (deleteClick) => {
    //     alert(deleteClick)
    // }

    deleteAdmin = (event, deleteid) => {
        alert(deleteid);
        event.preventDefault();
        this.setState({
            delete: deleteid
        })
        service.deleteAdmin(deleteid).then(data => {
            if (data.data === "deleted") {
                alert("delete done")
                window.location = './FindAllAdmin';
            }
            else
                alert("delete not possible")
        }, error => {
            alert(error)
            this.setState({
                errorMessage: error
            })
        }
        )
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Admin List</h2>
                <div className="row">
                    <br /><br />
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th> Admin Id </th>
                                <th> Admin Email </th>
                                {/* <th> Admin Password </th> */}
                                <th> Delete </th>
                                {/* <th> Edit </th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Admin.map(
                                    admin =>
                                        < tr key={admin.adminid} >
                                            <td> {admin.adminid} </td>
                                            <td> {admin.adminname} </td>
                                            {/* <td> {admin.city} </td> */}
                                            <td> <input type="submit" onClick={(e) => this.deleteAdmin(e, admin.adminid)} value="Delete" />   </td>
                                            {/* 6c757d */}
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div >
            </div >
        );
    }
}

export default FindAllAdmin;