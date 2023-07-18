package com.cdac.admin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.admin.dto.StudentDto;
import com.cdac.admin.service.AdminService;

@RestController
@RequestMapping("/adminrest")
public class AdminOrgRestController {

	@Autowired
	private AdminService adminService;
	
//	
//	organisation
//	@GetMapping("/email")
//	public OrganisationDataDto getByEmail(@RequestParam(value="email") String email) {
//		return adminService.findById(email);
//	}
	
	@GetMapping("/uid")
	public StudentDto getByUid(@RequestParam("uid") String uid) {
		return adminService.getByUid(uid);
	}
}
