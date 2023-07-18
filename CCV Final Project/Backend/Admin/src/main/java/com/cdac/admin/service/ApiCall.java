package com.cdac.admin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.cdac.admin.dto.OrganisationDataDto;
import com.cdac.admin.dto.StudentDto;

@Service
public class ApiCall {
	
	@Autowired RestTemplate restTemplate;

	private static final String studentMicroserviceBaseURL = 
			"http://student-service";
	
	private static final String organisationMicroserviceBaseURL = 
			"http://organisation-service";
	
	public StudentDto getStudentDetails(String uid) {
		StudentDto student = restTemplate.getForObject(
				studentMicroserviceBaseURL + "/student/admin/uid?uid={uid}", 
				StudentDto.class, uid);
		return student;
	}
	
	//need work
	public StudentDto deleteStudent(StudentDto stu) {
		StudentDto student = restTemplate.getForObject(
				studentMicroserviceBaseURL + "/student/admin/uidDelete?uid={uid}", 
				StudentDto.class, stu);
		return student;
	}
	
	public StudentDto updateStudent(String uid) {
		StudentDto student = restTemplate.getForObject(
				studentMicroserviceBaseURL + "/student/admin/uidUpdate", 
				StudentDto.class, uid);
		return student;
	}
	
	//need work
	public StudentDto createStudent(StudentDto stu) {
		StudentDto student = restTemplate.getForObject(
				studentMicroserviceBaseURL + "/student/admin/addStudent", 
				StudentDto.class, stu);
		return student;
	}
	
	
//-----------------------------------organisation----------------------------------------------------------//
	
	public OrganisationDataDto getOrganisationDetails(String email) {
		OrganisationDataDto orgDetails = restTemplate.getForObject(
				organisationMicroserviceBaseURL + "/organisation/admin/findByEmail?emailid={email}", 
				OrganisationDataDto.class, email);
		return orgDetails;
	}

//	public List<OrganisationDataDto> getAllOrganisationDetails() {
//		List<OrganisationDataDto> orgDetails = (List<OrganisationDataDto>) restTemplate.getForObject(
//				organisationMicroserviceBaseURL + "/organisation/admin/findAll", 
//				OrganisationDataDto.class);
//		return orgDetails;
//	}
	
	
}