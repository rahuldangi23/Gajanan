package com.cdac.student.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="courses")
public class StudentCourseEntity {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	private long coursesId;
	private String uid;
	private String course;

	public long getCoursesId() {
		return coursesId;
	}

	public void setCoursesId(long coursesId) {
		this.coursesId = coursesId;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public String getCourse() {
		return course;
	}

	public void setCourse(String course) {
		this.course = course;
	}
	
}