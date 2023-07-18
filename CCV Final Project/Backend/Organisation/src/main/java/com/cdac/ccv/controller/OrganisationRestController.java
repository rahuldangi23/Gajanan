package com.cdac.ccv.controller;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.ccv.dto.OrganisationData;
import com.cdac.ccv.entities.OrganisationDetailsEntity;
import com.cdac.ccv.entities.OrganisationLoginEntity;
import com.cdac.ccv.repositories.OrganisationDetailsRepository;
import com.cdac.ccv.repositories.OrganisationLoginRepository;

//@CrossOrigin
@RestController
@RequestMapping("/admin")
public class OrganisationRestController {
	
	@Autowired
	private OrganisationDetailsRepository orgDetailsRepo;
	
	@Autowired
	private OrganisationLoginRepository orgLoginRepo;
	
	@GetMapping("/findByEmail")
	public OrganisationDetailsEntity getById(@RequestParam(value="emailid") String email) {
		return orgDetailsRepo.findByEmail(email);
	}
	
	@GetMapping("/findAll")
	public List<OrganisationDetailsEntity> findAll() {
		return orgDetailsRepo.findAll();
	}
	
	@DeleteMapping("/deleteOrganisation")
	public void deleteOrg(@RequestParam("email") String email) {
		orgDetailsRepo.deleteById(email);
		orgLoginRepo.deleteById(email);
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
	
//	@RequestMapping("/verifyLogin")
//	public String verifyLogin(@RequestBody OrganisationData orgData, 
//			ModelMap modelMap, HttpServletRequest request) {
//		OrganisationLoginEntity byId;
//		
//		if (orgData.getEmail().equals("") || orgData.getPassword().equals("")) {
//			modelMap.addAttribute("error", "blank fields is not allowed");
//			return "Invalid Email/Password";
//		}
//		try {
//			byId = orgLoginRepo.findById(orgData.getEmail()).get();
//			System.out.println(byId.getEmail() + " " + byId.getPassword());
//			if (byId.getEmail().equals(orgData.getEmail()) && byId.getPassword().equals(orgData.getPassword())) {
//				OrganisationDetailsEntity findByEmail = orgDetailsRepo.findByEmail(byId.getEmail());
//				request.getSession(true).setAttribute("email", orgData.getEmail());
//				if(request.getSession().getAttribute("email")!=null) {
//					modelMap.addAttribute("byId",findByEmail);
//					return "Login successful";
//				}else {
//					return "Invalid Email/Password";
//				}
//			} else {
//				modelMap.addAttribute("error", "Invalid Username/Password");
//				return "Invalid Email/Password";
//			}
//		} catch (EntityNotFoundException e) {
//			System.out.println(e);
//			modelMap.addAttribute("error", "Invalid Username/Password");
//			return "Invalid Email/Password";
//		}
//	}
	
	@RequestMapping(value="/verifyLogin", produces="application/json")
	public OrganisationDetailsEntity verifyLogin(@RequestBody OrganisationData orgData) {
		OrganisationLoginEntity byId;
		if (orgData.getEmail().equals("") || orgData.getPassword().equals("")) {
			return null;
		}
		try {
			byId = orgLoginRepo.findById(orgData.getEmail()).get();
			System.out.println(byId.getEmail() + " " + byId.getPassword());
			if (byId.getEmail().equals(orgData.getEmail()) && byId.getPassword().equals(orgData.getPassword())) {
				OrganisationDetailsEntity findByEmail = orgDetailsRepo.findByEmail(byId.getEmail());
				System.out.println(findByEmail.getEmail());
				System.out.println(findByEmail.getNameOfOrganisation());
				return findByEmail;
			} else
				return null;
		} catch (EntityNotFoundException e) {
			return null;
		}
	}
	
	
}