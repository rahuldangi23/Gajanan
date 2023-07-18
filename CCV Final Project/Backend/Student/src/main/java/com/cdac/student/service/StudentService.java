package com.cdac.student.service;

import com.cdac.student.entity.StudentEntity;

public interface StudentService {
	StudentEntity addStudent(StudentEntity stu);

	StudentEntity findByUid(String uid);

}
