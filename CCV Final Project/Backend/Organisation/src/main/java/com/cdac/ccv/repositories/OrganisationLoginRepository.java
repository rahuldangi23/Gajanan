package com.cdac.ccv.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cdac.ccv.entities.OrganisationLoginEntity;

public interface OrganisationLoginRepository extends JpaRepository<OrganisationLoginEntity, String> {

//	@Query("SELECT a FROM OrganisationLoginEntity a WHERE a.emailid= ?1")
//	OrganisationLoginEntity findByEmailid(String emailid);
	
	OrganisationLoginEntity getById(String emailid);

	OrganisationLoginEntity getByEmail(String emailid);
}
