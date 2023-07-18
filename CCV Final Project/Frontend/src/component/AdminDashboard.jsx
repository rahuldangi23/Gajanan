import React, { Component } from 'react';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adminId: "",
        };
    }

    componentDidMount() {
        if (localStorage.getItem("adminId") == null)
            window.location = './AdminLogin'
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Admin Dashboard</h2>
                <div className="AdminDashBoardCss text-center">
                    <div>
                        <a href="./FindAllStudent"> Student </a>
                    </div>
                    <div>
                        <a href="./FindAllAdmin"> Admin </a>
                    </div>
                    <div>
                        <a href="./FindAllOrganisation"> Organisation </a>
                    </div>
                    <div>
                        <a href="./FindAllPayment"> Payment </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminDashboard;