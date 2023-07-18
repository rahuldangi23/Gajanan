import React, { Component } from 'react';
import CircularLogo from '../images/CDAC enhanced.png';
class Home extends Component {
    render() {
        return (
            <div className="HomeBody">
                <img className="HomeMainLogo" src={CircularLogo} alt="CDAC Other LOGO" height={500} weight={500} />
                <div className="info">
                    <h4> About C-DAC</h4>
                    <p>
                        Centre for Development of Advanced Computing (C-DAC) is the premier R&D organization of the
                        Ministry of Electronics and Information Technology (MeitY) for carrying out R&D in IT,
                        Electronics and associated areas. Different areas of C-DAC, had originated at different times,
                        many of which came out as a result of identification of opportunities.
                    </p>
                    <h4>About Website</h4>
                    <p>
                        That old Tedious days are over,
                        Say No to lengthy certificate verification process with us.
                        Welcome you to our Website,
                        we verify the C-DAC Certificate for you and provide the authorized proof by CDAC.
                        just register to our website and enter the details and TADAA in few seconds you get your verification result.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;