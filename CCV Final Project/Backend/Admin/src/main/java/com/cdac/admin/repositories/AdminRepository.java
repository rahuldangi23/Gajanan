package com.cdac.admin.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdac.admin.entities.AdminEntity;

@Repository
public interface AdminRepository extends JpaRepository<AdminEntity, Long>{

	@Query("SELECT a FROM AdminEntity a WHERE a.adminid= ?1")
	AdminEntity findByAdminId(long adminId);
	
//	@Query(value="from admin where AdminId=?1 limit 1", nativeQuery = true)
//	AdminEntity findByAdminId(long adminId);

//	ResponseEntity<?> success(Optional<AdminEntity> findByadminid);

}
