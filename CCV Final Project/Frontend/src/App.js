import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import FindAllOrganisation from './component/FindAllOrganisation';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import Contact from './component/Contact';
import OrganisationLogin from './component/OrganisationLogin';
import OrganisationSignUp from './component/OrganisationSignUp';
import ForgotPassword from './component/ForgotPassword';
import EnterOTP from './component/EnterOTP';
import NewPassword from './component/NewPassword';
import DashBoardOrganisation from './component/DashBoardOrganisation';
import NewVerification from './component/NewVerification';
import AdminLogin from './component/AdminLogin';
import AdminDashboard from './component/AdminDashboard';
import FindAllOrganisation from './component/FindAllOrganisation';
import FindAllStudent from './component/FindAllStudent';
import OrganisationEdit from './component/OrganisationEdit';
import FindAllAdmin from './component/FindAllAdmin';
import EditStudentRecord from './component/EditStudentRecord';
import AddNewStudent from './component/AddNewStudent';
import FindAllPayment from './component/FindAllPayment';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Routes>
              {/*path need to be  change*/}
              <Route path="/" element={<Home />}></Route>
              <Route path="/Home" element={<Home />}></Route>
              <Route path="/Aboutus" element={<AboutUs />}></Route>
              <Route path="/Contact" element={<Contact />}></Route>
              <Route path="/OrganisationLogin" element={<OrganisationLogin />}></Route>
              <Route path="/OrganisationSignUp" element={<OrganisationSignUp />}></Route>
              <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
              <Route path="/EnterOTP" element={<EnterOTP />}></Route>
              <Route path="/NewPassword" element={<NewPassword />}></Route>
              <Route path="/DashBoardOrganisation" element={<DashBoardOrganisation />}></Route>
              <Route path="/NewVerification" element={<NewVerification />}></Route>
              <Route path="/AdminLogin" element={<AdminLogin />}></Route>
              <Route path="/AdminDashboard" element={<AdminDashboard />}></Route>
              <Route path="/FindAllOrganisation" element={<FindAllOrganisation />}></Route>
              <Route path="/FindAllStudent" element={<FindAllStudent />}></Route>
              <Route path="/OrganisationEdit" element={<OrganisationEdit />}></Route>
              <Route path="/FindAllAdmin" element={<FindAllAdmin />}></Route>
              <Route path="/EditStudentRecord" element={<EditStudentRecord />}></Route>
              <Route path="/AddNewStudent" element={<AddNewStudent />}></Route>
              <Route path="/FindAllPayment" element={<FindAllPayment />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter >
    </div >
  );
}

export default App;
