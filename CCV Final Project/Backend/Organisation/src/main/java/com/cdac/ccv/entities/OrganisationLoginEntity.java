package com.cdac.ccv.entities;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "organisationlogin")
public class OrganisationLoginEntity extends AbstractOrganisationEntity {
	private String password;

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
