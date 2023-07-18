package com.cdac.ccv.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.ccv.dto.OrganisationData;
import com.cdac.ccv.entities.OrganisationDetailsEntity;
import com.cdac.ccv.entities.OrganisationLoginEntity;
import com.cdac.ccv.repositories.OrganisationDetailsRepository;
import com.cdac.ccv.repositories.OrganisationLoginRepository;

@Service
public class OrganisationDataServiceImpl implements OrganisationDataService {

	@Autowired
	private OrganisationDetailsRepository orgDetailsRepo;

	@Autowired
	private OrganisationLoginRepository orgLoginRepo;

	@Override
	public OrganisationData addOrganisation(OrganisationData orgdata) {
		OrganisationLoginEntity orgLogin = new OrganisationLoginEntity();
		orgLogin.setEmail(orgdata.getEmail());
		orgLogin.setPassword(orgdata.getPassword());
		orgLoginRepo.save(orgLogin);

		OrganisationDetailsEntity orgDetails = new OrganisationDetailsEntity();
		orgDetails.setEmail(orgLogin.getEmail());
		orgDetails.setNameOfOrganisation(orgdata.getNameOfOrganisation());
		orgDetails.setType(orgdata.getType());
		orgDetails.setCity(orgdata.getCity());
		orgDetails.setState(orgdata.getState());
		orgDetails.setCountry(orgdata.getCountry());
		orgDetails.setWebsiteLink(orgdata.getWebsiteLink());
		orgDetailsRepo.save(orgDetails);

		return orgdata;
	}
}
