package com.simjh96.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.simjh96.model.AuthenticationRequest;
import com.simjh96.model.AuthenticationResponse;
import com.simjh96.mybatis.MemberMapper;
import com.simjh96.security.CustomUserDetailsService;
import com.simjh96.util.JwtUtil;

@RestController
public class LoginController {
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private MemberMapper memberMapper;

	@Autowired
	private JwtUtil jwtTokenUtil;
	

//	@RequestMapping(value = "/authentication", method = RequestMethod.POST)
//	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest,
//			HttpServletRequest request) throws Exception {
//
//		System.out.println("authentication requested: ");
//		System.out.println(authenticationRequest.getNickname());
//		try {
//			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getNickname(),
//					authenticationRequest.getPassword()));
//		} catch (BadCredentialsException e) {
//			throw new Exception("Incorrect username or password", e);
//		}
//		
//		final String accessToken = jwtTokenUtil.generateToken(memberMapper.read(authenticationRequest.getNickname()), request.getRequestURL().toString(), true);
//		return ResponseEntity.ok(new AuthenticationResponse(accessToken));
//	}
}
