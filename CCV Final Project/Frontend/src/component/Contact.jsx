import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <h2 className="text-center"> Contant Details</h2>
                <br />
                <table className='table table-striped table-bordered'>
                    <tr>
                        <td>
                            <h4> Pune </h4>
                            <h6>Centre for Development of Advanced Computing</h6>
                            <h6>Pune University Campus, Ganesh Khind</h6>
                            <h6>Pune - 411 007</h6>
                            <h6>Maharashtra (India)</h6>
                            <h6>Phone:+91-20-2570-4100, Fax: +91-20-2569 4004</h6>
                        </td>
                        <td>
                            <h4> Pune </h4>
                            <h6>Centre for Development of Advanced Computing</h6>
                            <h6>Plot No. 6 & 7, Hardware Park, Sy No. 1/1, Srisailam Highway,</h6>
                            <h6>Pahadi Shareef Via (Keshavagiri Post) Hyderabad - 501510</h6>
                            <h6>Pune - 411 007</h6>
                            <h6>Maharashtra (India)</h6>
                            <h6>Phone:+91-20-2570-4100, Fax: +91-20-2569 4004</h6>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h4> Silchar </h4>
                            <h6>Centre for Development of Advanced Computing</h6>
                            <h6>NIT Silchar campus</h6>
                            <h6>Silchar - 788010</h6>
                            <h6>Assam (India)</h6>
                            <h6>Phone: +91 03842-242009, Fax: +91 03842-242009</h6>
                        </td>
                        <td>
                            <h4> Hyderabad </h4>
                            <h6>Centre for Development of Advanced Computing</h6>
                            <h6>Plot No. 6 & 7, Hardware Park, Sy No. 1/1, Srisailam Highway,</h6>
                            <h6>Pahadi Shareef Via (Keshavagiri Post) Hyderabad - 501510</h6>
                            <h6>Hyderabad - 501510</h6>
                            <h6>Telangana(India)</h6>
                            <h6>Phone:+91-9100034446/7/8, Fax: +91-9100034450</h6>
                        </td>
                    </tr>
                </table>
            </div >
        );
    }
}

export default Contact;