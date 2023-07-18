package com.cdac.admin.dto;

public class OrganisationDataDto {
	private String email;
	private String nameOfOrganisation;
	private String type;
	private String city;
	private String state;
	private String country;
	private String websiteLink;
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNameOfOrganisation() {
		return nameOfOrganisation;
	}

	public void setNameOfOrganisation(String nameOfOrganisation) {
		this.nameOfOrganisation = nameOfOrganisation;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getWebsiteLink() {
		return websiteLink;
	}

	public void setWebsiteLink(String websiteLink) {
		this.websiteLink = websiteLink;
	}

}