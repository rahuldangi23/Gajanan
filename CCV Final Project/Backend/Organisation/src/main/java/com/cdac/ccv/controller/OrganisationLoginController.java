package com.cdac.ccv.controller;

import java.util.Random;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.ccv.Utilities.EmailUtil;
import com.cdac.ccv.dto.ForgotPasswordDto;
import com.cdac.ccv.dto.OrganisationData;
import com.cdac.ccv.entities.OrganisationDetailsEntity;
import com.cdac.ccv.entities.OrganisationLoginEntity;
import com.cdac.ccv.repositories.OrganisationDetailsRepository;
import com.cdac.ccv.repositories.OrganisationLoginRepository;
import com.cdac.ccv.service.OrganisationDataService;

@Controller
@RequestMapping("/changeAndUpdate")
@RestController
public class OrganisationLoginController {
	Random random = new Random(100000);
	int otp;

	@Autowired
	EmailUtil emailUtil;

	@Autowired
	private OrganisationDataService orgDataService;

	@Autowired
	private OrganisationDetailsRepository orgDetailsRepo;
	
	@Autowired
	private OrganisationLoginRepository orgLoginRepo;

//	@RequestMapping("/register")
//	public String registerOrganisation() {
//		return "Login/registerOrganisation";
//	}
//
//	@RequestMapping("/loginOrganisation")
//	public String loginOrganisation() {
//		return "Login/loginOrganisation";
//	}
			
	@PostMapping("/completeOrganisation")
	public String completeOrganisation(@RequestBody OrganisationData orgdata) {
		OrganisationData addOrganisation = orgDataService.addOrganisation(orgdata);
		if (addOrganisation != null) {
			emailUtil.sendEmail(addOrganisation.getEmail(), "Congratulations, You are connected with C-DAC. "
					+ "Lets start our journey with our first verfication.", "Registration Successful");
			return "Profile Created";
//			modelMap.addAttribute("registrationSuccessful", "Registration Completed");
		}else {
			return "error occured try again";
		}
		
	}

//	@RequestMapping("/verifyLogin")
//	public String verifyLogin(@PathParam("email") String email, @PathParam("password") String password, 
//			ModelMap modelMap, @ModelAttribute("OrganisationData") OrganisationData orgData,
//			HttpServletRequest request) {
//		OrganisationLoginEntity byId;
//		if (email.equals("") || password.equals("")) {
//			modelMap.addAttribute("error", "blank fields is not allowed");
//			return "Login/loginOrganisation";
//		}
//		try {
//			byId = orgLoginRepo.getById(email);
//
//			if (byId.getEmail().equals(email) && byId.getPassword().equals(password)) {
//				OrganisationDetailsEntity findByEmail = orgDetailsRepo.findByEmail(byId.getEmail());
//				request.getSession(true).setAttribute("email", email);
//				if(request.getSession().getAttribute("email")!=null) {
//					modelMap.addAttribute("byId",findByEmail);
//					return "dashboard";
//				}else {
//					return "Login/loginOrganisation";
//				}
//			} else {
//				modelMap.addAttribute("error", "Invalid Username/Password");
//				return "Login/loginOrganisation";
//			}
//		} catch (EntityNotFoundException e) {
//			System.out.println(e);
//			modelMap.addAttribute("error", "Invalid Username/Password");
//			return "Login/loginOrganisation";
//		}
//	}

//	@RequestMapping("/loginAdmin")
//	public String loginAdmin() {
//		return "Login/loginAdmin";
//	}
//
//	@RequestMapping("/forgotPassword")
//	public String forgotPassword() {
//		return "Login/forgotPassword";
//	}

	@PostMapping("/forgotPasswordEmail")
	public String forgotPasswordEmail(@RequestParam("email") String email) {
		if (email.equals("")) {
//			modelMap.addAttribute("MailId", "Invalid Email");
			return "Blank field not allowed";
		}
		System.out.println("check email received or not " + email);
		try {
			OrganisationLoginEntity orgLogin = orgLoginRepo.findById(email).get();
			otp = random.nextInt(999999);
			emailUtil.sendEmail(email, "For Changing Password, Use Following OTP \n OTP:" + otp, "CCV Password Change");
			return "OTP SENT";
		}catch(Exception e) {
			return "Email Not Found";
		}
//		modelMap.addAttribute("MailSent", "Mail Sent to " + email);
//		modelMap.addAttribute("EmailForPasswordUpdate", email);
//		return "Email Not Found";
	}

	@PostMapping("/checkOTP")
	public String checkOTP(@PathParam("OTP") String OTP) {
		if (OTP.equals("")) {
//			modelMap.addAttribute("wrongOTP", "Empty field not allowed");
			return "Blank field not allowed";
		}
		int top = Integer.parseInt(OTP);
		if (otp == top) {
//			modelMap.addAttribute("EmailForPasswordUpdate", EmailForPasswordUpdate);
			return "OTP is Correct";
		}
//		if (otp != top)
//			modelMap.addAttribute("wrongOTP", "OTP not Matched");
			return "Invalid OTP";
		
	}

	@PostMapping("/newPasswordCheckAndUpdate")
	public String newPasswordCheckAndUpdate(@RequestBody ForgotPasswordDto fpDto) {
		if (fpDto.getPassword().equals("")) {
			return "Empty field not allowed";
		} else if ((fpDto.getPassword().length() < 8) || (fpDto.getRePassword().length() < 8)) {
			return "Password length must be 8 or more";
		} else if (!(fpDto.getRePassword().equals(fpDto.getPassword()))) {
			return "Password did match";
		} else if (fpDto.getRePassword().equals(fpDto.getPassword())) {
			OrganisationLoginEntity byEmail = orgLoginRepo.getByEmail(fpDto.getEmail());
			if (byEmail != null) {
				byEmail.setPassword(fpDto.getPassword());
				orgLoginRepo.save(byEmail);
				return "Password Changed Successfully";
			} else {
				return "Error Occured";
			}
		}
		return "Email not found error";
	}
	
	@PostMapping("/updateOrgDetails")
	public String updateOrganisationDetails(@RequestBody OrganisationData orgDetails) {
		
		try {
			System.out.println(orgDetails.getEmail());
			OrganisationDetailsEntity findByEmail = orgDetailsRepo.findByEmail(orgDetails.getEmail());
			findByEmail.setNameOfOrganisation(orgDetails.getNameOfOrganisation());
			findByEmail.setCity(orgDetails.getCity());
			findByEmail.setState(orgDetails.getState());
			findByEmail.setCountry(orgDetails.getCountry());
			findByEmail.setType(orgDetails.getType());
			findByEmail.setWebsiteLink(orgDetails.getWebsiteLink());
			orgDetailsRepo.save(findByEmail);
			return "Details Updated";
		} catch(Exception e) {
			return "Error Occured, Try Logout and Login again";
		}
	}
//		if (request.getSession().getAttribute("email") != null) {
//			OrganisationLoginEntity byId = orgLoginRepo.getById(orgDetails.getEmail());
//			orgDetails.setEmail(byId.getEmail());
//			orgDetails.setCity(orgDetails.getCity());
//			orgDetails.setCountry(orgDetails.getCountry());
//			orgDetails.setState(orgDetails.getState());
//			orgDetails.setType(orgDetails.getType());
//			orgDetails.setWebsiteLink(orgDetails.getWebsiteLink());
//			orgDetailsRepo.save(orgDetails);
//			modelMap.addAttribute("byId", orgDetails);
//			modelMap.addAttribute("updatedmsg", "Record updated successfully");
//			return "dashboard";
//		} else {
//			return "Login/loginOrganisation";
//		}
	
//	@GetMapping("/logOut")
//	public String logOut(HttpServletRequest request) {
//        request.getSession().invalidate();
//		return "Login/loginOrganisation";
//	}	
}
