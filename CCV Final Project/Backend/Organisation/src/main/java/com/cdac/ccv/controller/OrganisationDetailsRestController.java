package com.cdac.ccv.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.ccv.entities.OrganisationDetailsEntity;
import com.cdac.ccv.entities.OrganisationLoginEntity;
import com.cdac.ccv.repositories.OrganisationDetailsRepository;
import com.cdac.ccv.repositories.OrganisationLoginRepository;

@RestController
@RequestMapping("/")
@Controller
public class OrganisationDetailsRestController {

	@Autowired
	OrganisationDetailsRepository orgDetailsRepo;

	@Autowired
	private OrganisationLoginRepository orgLoginRepo;

//	@PostMapping("/editOrgDetails")
//	public String editOrgDetails(@RequestParam("email") String email, ModelMap modelMap, HttpServletRequest request) {
//		if (request.getSession().getAttribute("email") != null) {
//			OrganisationDetailsEntity orgDetails = orgDetailsRepo.findByEmail(email);
//			modelMap.addAttribute("email", orgDetails.getEmail());
//			modelMap.addAttribute("nameOfOrganisation", orgDetails.getNameOfOrganisation());
//			modelMap.addAttribute("type", orgDetails.getType());
//			modelMap.addAttribute("city", orgDetails.getCity());
//			modelMap.addAttribute("country", orgDetails.getCountry());
//			modelMap.addAttribute("state", orgDetails.getState());
//			modelMap.addAttribute("websiteLink", orgDetails.getWebsiteLink());
//			return "editOrgDetails";
//		} else {
//			return "Login/loginOrganisation";
//		}
//
//	}

//	@PostMapping("/updateOrgDetails")
//	public String updateOrganisationDetails(@ModelAttribute("orgDetails") OrganisationDetailsEntity orgDetails,
//			ModelMap modelMap, HttpServletRequest request) {
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
//
//	}

	@RequestMapping("/newVerification")
	public String newVerification(HttpServletRequest request) {
		if (request.getSession().getAttribute("email") != null)
			return "newVerification";
		else
			return "Login/loginOrganisation";
	}

}
