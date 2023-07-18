package com.cdac.ccv.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.ccv.entities.OrganisationDetailsEntity;

public interface OrganisationDetailsRepository extends JpaRepository<OrganisationDetailsEntity, String> {

	OrganisationDetailsEntity findByEmail(String email);

}
