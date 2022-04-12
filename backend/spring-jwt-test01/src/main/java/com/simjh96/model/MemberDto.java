package com.simjh96.model;

import java.sql.Date;
import java.util.List;

import lombok.Data;

@Data
public class MemberDto {
	private String nickname;
	private String password;
	private String kakaopk;
	private String kakaothumb;
	private String kakaoname;
	private String email;
	private int zipcode;
	private String address;
	private String phone;
	private Date regdate;
	private List<String> authList;
}
