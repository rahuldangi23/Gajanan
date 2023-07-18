import React, { Component } from 'react';
import SadhuSir from '../images/AboutUs/Sadhu Sir.jpg';
import Riddhi from '../images/AboutUs/riddhi.jpg';
import Saurabh from '../images/AboutUs/saurabh deshmane.jpg';
import Rawalnath from '../images/AboutUs/rawalnath.jpg';
import Dharam from '../images/AboutUs/dharmveer.jpg';
import Sarang from '../images/AboutUs/sarang.jpg'
class AboutUs extends Component {
    render() {
        return (
            <div className="col-md-8 offset-md-2">
                <div className="profiles">
                    <img className="odd" src={SadhuSir} alt="sadhu sir" height={500} weight={500} />
                    <div>
                        <h1><u> Guide </u></h1>
                        <h2>Prof. Sadhu Sreenivas</h2>
                        <h6>Principal Technical Officer, C-DAC</h6>
                        <h6>C-DAC Hyderabad, Telangana, India</h6>
                    </div>
                </div>
                <div className="profiles">
                    <img className="even" src={Sarang} alt="sarang" height={500} weight={500} />
                    <div>
                        <h1><u> Team Lead </u></h1>
                        <h2>Sarang Girish Deodhar</h2>
                        <h6>220350320026</h6>
                        <h6>C-DAC Hyderabad, Telangana, India</h6>
                    </div>
                </div>
                <div className="profiles">
                    <img className="odd" src={Riddhi} alt="sadhu sir" height={500} weight={500} />
                    <div>
                        <h1><u> Communication Lead </u></h1>
                        <h2>Choudhari Riddhi Kishor</h2>
                        <h6>220350320024</h6>
                        <h6>C-DAC Hyderabad, Telangana, India</h6>
                    </div>
                </div>
                <div className="profiles">
                    <img className="even" src={Rawalnath} alt="sarang" height={500} weight={500} />
                    <div>
                        <h1><u> Team Member </u></h1>
                        <h2>Dangi Rawalnath Satappa</h2>
                        <h6>220350320025</h6>
                        <h6>C-DAC Hyderabad, Telangana, India</h6>
                    </div>
                </div>
                <div className="profiles">
                    <img className="odd" src={Saurabh} alt="sadhu sir" height={500} weight={500} />
                    <div>
                        <h1><u> Team Member </u></h1>
                        <h2>Deshmane Saurabh Amol</h2>
                        <h6>220350320027</h6>
                        <h6>C-DAC Hyderabad, Telangana, India</h6>
                    </div>
                </div>
                <div className="profiles">
                    <img className="even" src={Dharam} alt="sarang" height={500} weight={500} />
                    <div>
                        <h1><u> Team Member </u></h1>
                        <h2>Devane Dharmveer Nivuratti</h2>
                        <h6>220350320028</h6>
                        <h6>C-DAC Hyderabad, Telangana, India</h6>
                    </div>
                </div>
                <br /><br />
            </div >
        );
    }
}

export default AboutUs;