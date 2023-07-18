package com.cdac.admin.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.admin.dto.AdminLoginDto;
import com.cdac.admin.entities.AdminEntity;
import com.cdac.admin.repositories.AdminRepository;
import com.cdac.admin.service.AdminService;

@Controller
@RestController
@RequestMapping("/adminSelf")
public class AdminController {
	
	
	@Autowired
	private AdminRepository adminRepo;
	
	@Autowired
	private AdminService adminServ;
	
	@RequestMapping("/loginAdmin")
	public String loginAdmin() {
		return "Login/loginAdmin";
	}
	
	@GetMapping(value="/id",produces="application/json")
	public AdminEntity findById(@RequestParam(value="adminid") Long adminid) {
		Optional<AdminEntity> findById = adminRepo.findById(adminid);
		return findById.get();
	}
	
	@GetMapping(value="/findAll", produces="application/json")
	public List<AdminEntity> findAll() {
		return adminServ.getAll();
	}
	
	@DeleteMapping("/deleteid/{id}")
	public String deleteAdmin(@PathVariable Long id) {
		System.out.println(id);
		try {
		adminRepo.deleteById(id);
			return "deleted";
		}catch(Exception e) {
			return "id not found";
		}
	}
	
	@PostMapping("/login")
	public String login(@RequestBody AdminLoginDto loginDto) {
		String returnValue = "login failed";
		if(!(loginDto.getAdminId().equals("") || (loginDto.getPassword().equals("")))) {
			long inputAdminId = Long.parseLong(loginDto.getAdminId());
			AdminEntity findByAdminId = null;
			try {
				findByAdminId = adminRepo.findByAdminId(inputAdminId);
				if(findByAdminId != null) {
					returnValue = (findByAdminId.getAdminpassword().equals(loginDto.getPassword())) ? "login success" : returnValue;
				}
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
		return returnValue;
	}
}