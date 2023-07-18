package com.cdac.student.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.cdac.student.entity.StudentCourseEntity;

public interface StudentCourseRepository extends JpaRepository<StudentCourseEntity, Long> {

	StudentCourseEntity findByUid(String uid);

	@Transactional
	@Modifying
	@Query("update StudentCourseEntity set course = ?1 where coursesId = ?2")
	int updateCourse(String courseName, long courseId);
}
