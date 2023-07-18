package com.cdac.student.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.student.entity.StudentEntity;

public interface StudentRepository extends JpaRepository<StudentEntity, String> {

	StudentEntity findByUid(String uid);
	
}
