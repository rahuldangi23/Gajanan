import React, { Component } from 'react';
// import styled from 'styled-components';
import Image from '../images/DAC LOGO.PNG'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggin: false,
            email: '',
            adminId: ''
        }
    }

    ReloadPrevention = e => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }

    logoutClicked = () => {
        if (this.state.email != null) {
            localStorage.clear();
            // localStorage.removeItem("email");
            // localStorage.removeItem("name");
            // localStorage.removeItem("type");
            // localStorage.removeItem("city");
            // localStorage.removeItem("state");
            // localStorage.removeItem("country");
            // localStorage.removeItem("Website");
        }
    }

    componentDidMount() {
        this.setState({
            email: localStorage.getItem("email"),
            adminId: localStorage.getItem("adminId")
        }, () => {
            if (this.state.email != null || this.state.adminId != null) {
                this.setState({
                    isLoggin: true
                })
            } else {
                this.setState({
                    isLoggin: false
                })
            }
        });
    }

    render() {
        return (
            <div>
                <div className="header">
                    <img className="header-logo" src={Image} alt="DAC LOGO" height={50} width={100} />
                    <nav className="links d-flex flex-row-reverse">
                        <a href="/OrganisationLogin" onClick={() => this.logoutClicked()}> {!this.state.isLoggin ? "Login" : "Logout"} </a>
                        <a href="/Contact"> Contact Us </a>
                        <a href="/Aboutus"> About Us </a>
                        <a href="/"> Home </a>
                    </nav>
                </div>

            </div>
        );
    }
}

// const Link = styled.div`
//     align-items:right;
//     text-decoration:none;
// `;


export default Header;