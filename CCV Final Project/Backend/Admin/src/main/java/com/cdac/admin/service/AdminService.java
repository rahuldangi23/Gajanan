package com.cdac.admin.service;

import java.util.List;

import com.cdac.admin.dto.StudentDto;
import com.cdac.admin.entities.AdminEntity;

public interface AdminService {

	StudentDto getByUid(String uid);

	List<AdminEntity> getAll();
//	void deleteByAdmin(Long adminid);

//	OrganisationDataDto getByEmail(String email);

//	StudentDto getByIdUsingWebClient(String uid);

//	List<OrganisationDataDto> getAll();

}
