/*
 * package com.cdac.ccv.repositories;
 * 
 * import java.util.Date;
 * 
 * import org.springframework.data.jpa.repository.Query;
 * 
 * import com.cdac.ccv.entities.StudentEntity;
 * 
 * public interface StudentRepository {
 * 
 * @Query("from Student where uid=:uid and rollNo=:rollNo and firstName=:firstName and lastName=:lastName "
 * +
 * "and dateOfBirth=:dateOfBirth and institute=:institute and grade=:grade and passingYear=:"
 * + "passingYear") StudentEntity findByDetails(String uid, int rollNo, String
 * firstName, String lastName, Date dateOfBirth, String institute, String grade,
 * String passingYear);
 * 
 * 
 * }
 */