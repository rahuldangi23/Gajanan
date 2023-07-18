import React, { Component } from 'react';
import service from '../Services/service';

class FindAllPayment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Payment: [],
            adminId: localStorage.getItem("adminId"),
            errorMessage: ''
        }
    }
    componentDidMount() {
        if (localStorage.getItem("adminId") == null)
            window.location = './AdminLogin'
        else
            service.getAllPayment().then((res) => {
                this.setState({ Payment: res.data });
            });
    }

    deletePaymentRecord = (e, uid) => {
        e.preventDefault();
        service.deletePaymentRecord(uid).then(data => {
            if (data.data === "deleted") {
                alert("done")
                window.location = './FindAllPayment'
            } else
                alert(data.data)
        }, error => {
            alert(error)
            this.setState({
                errorMessage: 'error occur can not delete'
            });
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Payment History</h2>
                {/* <div> <a href="./AddNewStudent" className="buttonDashboard" > Add Student </a></div> */}
                <br /><br />
                <div className="row">
                    <br /><br />
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th> PaymentId </th>
                                <th> PaymentType </th>
                                <th> Uid </th>
                                <th> EmailId </th>
                                <th> DateOfPayment </th>
                                <th> status </th>
                                <th> delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Payment.map(
                                    pay =>
                                        <tr key={"pay.PaymentId"}>
                                            <td> {pay.PaymentId} </td>
                                            <td> {pay.PaymentType} </td>
                                            <td> {pay.Uid} </td>
                                            <td> {pay.EmailId} </td>
                                            <td> {pay.DateOfPayment.slice(0, 10)} </td>
                                            <td> {pay.status} </td>
                                            <td> {pay.delete} </td>
                                            <td> <button onClick={(e) => this.deletePaymentRecord(e, pay.uid)} > Delete </button></td>
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

export default FindAllPayment;