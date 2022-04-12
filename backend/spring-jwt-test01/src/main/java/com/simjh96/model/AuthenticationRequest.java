package com.simjh96.model;

import lombok.Data;

@Data
public class AuthenticationRequest {
	private String nickname;
	private String password;

}
