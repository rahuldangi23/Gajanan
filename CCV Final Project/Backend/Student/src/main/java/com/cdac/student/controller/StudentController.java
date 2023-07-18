package com.cdac.student.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.student.dto.StudentDto;
import com.cdac.student.entity.StudentCourseEntity;
import com.cdac.student.entity.StudentEntity;
import com.cdac.student.repositories.StudentCourseRepository;
import com.cdac.student.repositories.StudentRepository;
import com.cdac.student.service.StudentService;

@RestController
@RequestMapping("/admin")
public class StudentController {
	
//	private static final Logger logger = LoggerFactory.getLogger(StudentController.class);
	
	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
	private StudentCourseRepository studentCourseRepo;
	
	@Autowired
	private StudentService studentServ;
		
	StudentEntity se;
	
	@GetMapping("/uid")
	public StudentEntity getByUid(@RequestParam(value="uid") String uid) {
		StudentCourseEntity getCourseByUid = studentCourseRepo.findByUid(uid);
		StudentEntity findStudentByUid = studentRepo.findByUid(uid);
		findStudentByUid.setStudentCourse(getCourseByUid);
		return findStudentByUid;
	}
	
	@PostMapping("/searchRecord")
	public StudentEntity searchStudentRecord(@RequestBody StudentDto studentDto) {
		try {
			StudentEntity studentData = studentRepo.findById(studentDto.getUid()).get();
			StudentCourseEntity courseData = studentCourseRepo.findByUid(studentData.getUid());
			StudentCourseEntity cd = new StudentCourseEntity();
			cd.setCourse(courseData.getCourse());
			cd.setCoursesId(courseData.getCoursesId());
			cd.setUid(courseData.getUid());
			studentData.setStudentCourse(cd);
			return studentData;
		}catch(Exception e) {
			return null;
		}
	}
	
	@GetMapping("/findAll")
	public List<StudentEntity> getAll() {
		List<StudentEntity> stud = new ArrayList<>();
//		stud.forEach(uid-> uid.setStudentCourse(studentCourseRepo.findByUid(uid.getUid())));
		List<StudentCourseEntity> course = studentCourseRepo.findAll();
		course.forEach(uid->{
			StudentEntity stud2 = studentRepo.findByUid(uid.getUid());
			StudentCourseEntity courseObject = new StudentCourseEntity();
			courseObject.setCourse(uid.getCourse());
			courseObject.setCoursesId(uid.getCoursesId());
			courseObject.setUid(uid.getUid());
			stud2.setStudentCourse(courseObject);
			stud.add(stud2);
		});
		return stud;
	}
	
	@PostMapping("/addStudent")
	public String saveStudent(@RequestBody StudentDto stu) {
		StudentEntity student = null;
		try {
		student = studentRepo.findById(stu.getUid()).get();
		}catch(Exception e) {}
		if(student == null) {
			se = new StudentEntity();
			se.setUid(stu.getUid());
			se.setFirstName(stu.getFirstName());
			se.setLastName(stu.getLastName());
			se.setInstitute(stu.getInstitute());
			se.setDateOfBirth(stu.getDateOfBirth());
			se.setGrade(stu.getGrade());
			se.setPassingYear(stu.getPassingYear());
			se.setRollNo(stu.getRollNo());
			
			
			StudentCourseEntity sce = new StudentCourseEntity();
			sce.setCourse(stu.getCourse());
			sce.setUid(stu.getUid());
			
			se.setStudentCourse(sce);
			
			studentRepo.save(se);
			studentCourseRepo.save(sce);
//			return studentServ.addStudent(stu);
			
			return "Record saved";
		}else {
			return "Record Already Present";
		}
	}
	
	@DeleteMapping("/uidDelete/{uid}")
	public String deleteStudent(@PathVariable("uid") String uid) {
		StudentCourseEntity getCourseByUid = studentCourseRepo.findByUid(uid);
		StudentEntity findStudentByUid = studentRepo.findByUid(uid);
		studentCourseRepo.delete(getCourseByUid);
		studentRepo.delete(findStudentByUid);
		return "deleted";
	}
	
	@PutMapping("/uidUpdate")
	public String updateStudent(@RequestBody StudentDto student) {
		StudentEntity updateField = null;
		StudentCourseEntity getCourseByUid = null;
		try {
			System.out.println(student.getUid());
			updateField = studentRepo.findByUid(student.getUid());
		}catch(Exception e) {
			return "Record not found";
		}
		if(updateField != null) {
			try {
				getCourseByUid = studentCourseRepo.findByUid(updateField.getUid());
			}catch(Exception e) {
				return "Record not found";
			}
			System.out.println(getCourseByUid);
				se = new StudentEntity();
				se.setFirstName(student.getFirstName());
				se.setLastName(student.getLastName());
				se.setInstitute(student.getInstitute());
				se.setRollNo(student.getRollNo());
				se.setPassingYear(student.getPassingYear());
				se.setGrade(student.getGrade());
//				StudentCourseEntity sce = new StudentCourseEntity();
//				sce.setCourse(student.getCourse());
//				sce.setUid(student.getUid());
//				se.setStudentCourse(sce);
				StudentCourseEntity findByUid = studentCourseRepo.findByUid(se.getUid());
				studentRepo.save(se);
				studentCourseRepo.updateCourse(student.getCourse(), findByUid.getCoursesId());
				return "Update Successful";
		}
		else{
			return "Record not found to update";
		}
	}
}
