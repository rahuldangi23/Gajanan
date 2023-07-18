import axios from 'axios';
// import { BehaviorSubject } from 'rxjs';

const ORGANISTAION_API_BASE_URL = "http://localhost:8080/organisation/";
const STUDENT_API_BASE_URL = "http://localhost:8082/student/";
const ADMIN_API_BASE_URL = "http://localhost:8081/admin/";
const PAYMENT_API_BASE_URL = "http://localhost:8083/payment";
// const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
class service {
    constructor(props) {
        this.state = {
            currentUSer: '',
            dev: ''
        }
    }

    //Call Organisation Module
    getAllOrganisation() {
        return axios.get(ORGANISTAION_API_BASE_URL + 'admin/findAll');
    }

    getOrganisationForOrganisation(employeeId) {
        return axios.get(ORGANISTAION_API_BASE_URL + 'admin/findByEmail?emailid=' + employeeId)
    }

    checkLoginCredOrganisation(cred) {
        return axios.post(ORGANISTAION_API_BASE_URL + 'admin/verifyLogin', { email: cred.email, password: cred.password });
    }

    createNewOrganisationRecord(cred) {
        return axios.post(ORGANISTAION_API_BASE_URL + 'changeAndUpdate/completeOrganisation', {
            email: cred.email,
            password: cred.password,
            nameOfOrganisation: cred.name,
            type: cred.type,
            city: cred.city,
            state: cred.state,
            country: cred.country,
            websiteLink: cred.websiteLink
        });
    }

    sendOtpToEmail(email) {
        return axios.post(ORGANISTAION_API_BASE_URL + 'changeAndUpdate/forgotPasswordEmail?email=' + email);
    }

    CheckOTP(OTP) {
        return axios.post(ORGANISTAION_API_BASE_URL + 'changeAndUpdate/checkOTP?OTP=' + OTP);
    }

    checkPassword(state) {
        return axios.post(ORGANISTAION_API_BASE_URL + 'changeAndUpdate/newPasswordCheckAndUpdate', {
            email: state.email,
            password: state.password,
            rePassword: state.RePassword
        });
    }

    editOrganisationDetails(state) {
        return axios.post(ORGANISTAION_API_BASE_URL + 'changeAndUpdate/updateOrgDetails', {
            email: state.email,
            password: state.password,
            nameOfOrganisation: state.name,
            type: state.type,
            city: state.city,
            state: state.state,
            country: state.country,
            websiteLink: state.websiteLink
        })
    }

    //Call student Module
    getAllStudent() {
        return axios.get(STUDENT_API_BASE_URL + 'admin/findAll');
    }

    checkNewVerification(studentDetails) {
        return axios.post(STUDENT_API_BASE_URL + 'admin/searchRecord', {
            uid: studentDetails.uid,
            rollNo: studentDetails.rollNo,
            firstName: studentDetails.firstName,
            lastName: studentDetails.lastName,
            dateOfBirth: studentDetails.dateOfBirth,
            course: studentDetails.course,
            institute: studentDetails.institute,
            grade: studentDetails.grade,
            passingYear: studentDetails.passingYear
        });
    }

    deleteStudentRecord(uid) {
        return axios.delete(STUDENT_API_BASE_URL + 'admin/uidDelete/' + uid);
    }

    EditStudentRecord(state) {
        return axios.put(STUDENT_API_BASE_URL + 'admin/uidUpdate', {
            uid: state.uid,
            rollNo: state.rollNo,
            firstName: state.FirstName,
            lastName: state.LastName,
            dateOfBirth: state.DateOfBirth,
            institute: state.Institute,
            grade: state.Grade,
            passingYear: state.PassingYear,
            course: state.course
        })
    }

    createNewStudent(state) {
        return axios.post(STUDENT_API_BASE_URL + 'admin/addStudent', {
            uid: state.uid,
            rollNo: state.rollNo,
            firstName: state.FirstName,
            lastName: state.LastName,
            dateOfBirth: state.DateOfBirth,
            institute: state.Institute,
            grade: state.Grade,
            passingYear: state.PassingYear,
            course: state.course
        })
    }

    //Call Admin module
    getAllAdmin() {
        return axios.get(ADMIN_API_BASE_URL + 'adminSelf/findAll');
    }

    checkLoginAdminLogin(cred) {
        return axios.post(ADMIN_API_BASE_URL + 'adminSelf/login', { adminId: cred.adminId, password: cred.password });
    }

    deleteAdmin(deleteid) {
        return axios.delete(ADMIN_API_BASE_URL + 'adminSelf/deleteid/' + deleteid);
    }

    deleteOrganisation(deleteid) {
        return axios.delete(ORGANISTAION_API_BASE_URL + 'admin/deleteOrganisation?email=' + deleteid);
    }


    //Payment
    deletePaymentRecord(deleteid) {
        return axios.delete(PAYMENT_API_BASE_URL + 'admin/deletePayment?paymentId=' + deleteid)
    }

    makePayment(organisationEmail) {
        return axios.post(PAYMENT_API_BASE_URL + 'admin/makePayment/', { email: organisationEmail })
    }

    // checkLoginCredOrganisation(state) {
    //     alert(state.email);
    //     alert(state.password);
    //     return axios.post(ORGANISTAION_API_BASE_URL + 'verifyLogin', {
    //         "email": state.email, "password": state.password
    //     }, alert(state.email)).then(response => {
    //         alert("response =>" + response.data);
    //         localStorage.setItem("token", response.data.token);
    //         axios.defaults.headers.common['Authorization'] = "Bearer " + response.data.token;
    //         window.location("../component/DashBoardOrganisation");
    //     }, error => {
    //         alert(error);
    //     }
    //     )
    // }
    //     const requestOptions = {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //             "cache-control": "no-cache",
    //         },
    //         body: JSON.stringify(state),
    //     };
    //     return fetch(ORGANISTAION_API_BASE_URL + `verifyLogin`, requestOptions)
    //         .then((res) => res.json())
    //         .then((result) => {
    //             return result;
    //         });
    // }
}
export default new service();