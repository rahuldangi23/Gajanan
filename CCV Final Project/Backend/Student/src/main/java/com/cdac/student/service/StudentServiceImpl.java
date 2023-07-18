package com.cdac.student.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.student.entity.StudentCourseEntity;
import com.cdac.student.entity.StudentEntity;
import com.cdac.student.repositories.StudentCourseRepository;
import com.cdac.student.repositories.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService{
	
	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
	private StudentCourseRepository studentCourseRepo;
	
	@Override
	public StudentEntity findByUid(String uid) {
		StudentEntity studentById = studentRepo.findByUid(uid);
		studentById.setStudentCourse(studentCourseRepo.findByUid(uid));
		return studentById; 
	}
	
	@Override
	public StudentEntity addStudent(StudentEntity stu) {
		StudentEntity se = new StudentEntity();
		se.setUid(stu.getUid());
		se.setFirstName(stu.getFirstName());
		se.setLastName(stu.getLastName());
		se.setInstitute(stu.getInstitute());
		se.setDateOfBirth(stu.getDateOfBirth());
		se.setGrade(stu.getGrade());
		se.setPassingYear(stu.getPassingYear());
		se.setRollNo(stu.getRollNo());
		se.setStudentCourse(stu.getStudentCourse());
		
		StudentCourseEntity sce = new StudentCourseEntity();
		sce.setCourse(stu.getStudentCourse().getCourse());
		sce.setUid(stu.getUid());
//		sce.setCoursesId(stu.getStudentCourse().getCoursesId());
		
		studentRepo.save(se);
		studentCourseRepo.save(sce);
		
		return se;
	}
}
