package com.cdac.admin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.admin.dto.StudentDto;
import com.cdac.admin.entities.AdminEntity;
import com.cdac.admin.repositories.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	ApiCall apiCall;
	
	@Autowired
	private AdminRepository adminRepo;
	
	
//	@Autowired
//	private ApiCallUsingWebClient apiCallUsingWebClient;
	
	@Override
	public StudentDto getByUid(String uid) {
		StudentDto s = apiCall.getStudentDetails(uid);
		return s;
	}


	@Override
	public List<AdminEntity> getAll() {
		return adminRepo.findAll();
	}


//	@Override
//	public void deleteById(Long adminid) {
//		Optional<AdminEntity> findById = adminRepo.findById(adminid);
//		adminRepo.deleteByAdmin(findById.get());
////	}


	
//	@Override
//	public List<StudentDto> getByIdUsingWebClient(String uid) {
//		Flux<StudentDto> courseDetails = apiCallUsingWebClient.getCourseDetails(uid);
//		return null;
//	}
	
}
