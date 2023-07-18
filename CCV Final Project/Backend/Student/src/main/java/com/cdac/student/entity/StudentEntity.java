package com.cdac.student.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="student")
public class StudentEntity {
	@Id
	@Column(name="uid")
	private String uid; //on certificate
	@Column(name="rollNo")
	private int rollNo; //prn
	@Column(name="FirstName")
	private String firstName;
	@Column(name="LastName")
	private String lastName;
	@Column(name="DateOfBirth")
	private Date dateOfBirth;
	@Column(name="Institute")
	private String institute;
	@Column(name="Grade")
	private String grade;
	@Column(name="PassingYear")
	private String passingYear;
	
	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name="alias", referencedColumnName = "course_id")
	@Transient
	private StudentCourseEntity studentCourse;
	
	public StudentCourseEntity getStudentCourse() {
		return studentCourse;
	}
	public void setStudentCourse(StudentCourseEntity studentCourse) {
		this.studentCourse = studentCourse;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public int getRollNo() {
		return rollNo;
	}
	public void setRollNo(int rollNo) {
		this.rollNo = rollNo;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getInstitute() {
		return institute;
	}
	public void setInstitute(String institute) {
		this.institute = institute;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getPassingYear() {
		return passingYear;
	}
	public void setPassingYear(String passingYear) {
		this.passingYear = passingYear;
	}
}
