package com.cdac.admin.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admin")
public class AdminEntity {
	@Id
	@Column(name="AdminId")
	private long adminid;
	@Column(name="AdminName")
	private String adminname;
	@Column(name="AdminPassword")
	private String adminpassword;
	public long getAdminid() {
		return adminid;
	}
	public void setAdminid(long adminid) {
		this.adminid = adminid;
	}
	public String getAdminname() {
		return adminname;
	}
	public void setAdminname(String adminname) {
		this.adminname = adminname;
	}
	public String getAdminpassword() {
		return adminpassword;
	}
	public void setAdminpassword(String adminpassword) {
		this.adminpassword = adminpassword;
	}
	

}
