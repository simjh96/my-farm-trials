package com.simjh96.controller;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import com.simjh96.model.AuthenticationRequest;
import com.simjh96.model.AuthenticationResponse;
import com.simjh96.security.CustomUserDetailsService;
import com.simjh96.util.JwtUtil;
import com.simjh96.util.RequestPrint;

@Controller
public class HomeController {


	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index() {
		System.out.println("index controller 호출");
		return "index";
	}

	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public void home() {
		System.out.println("home controller 호출");
	}

	@RequestMapping(value = "/others", method = RequestMethod.GET)
	public String others() {
		System.out.println("others controller 호출");
		return "others";
	}

	@ResponseBody
	@RequestMapping(value = "/kakao-redirect-test", method = RequestMethod.GET)
	public Map<String, ?> kakaoRedirectTest(@RequestParam String code, HttpServletRequest request) throws Exception {
		System.out.println("kakoRedirectTest 호출 됨");
		Map<String,Object> hashMap = new HashMap<String,Object>();
		String kakaoAccount1 = null;
		new RequestPrint(request);
		try {
			RestTemplate rest = new RestTemplate();
			MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
			map.add("grant_type", "authorization_code");
			map.add("client_id", "3829a14694ef09f4dd5c3d5307e22b60");
			map.add("redirect_uri", "http://localhost:8090/spring-jwt-test01/kakao-redirect-test");
			map.add("code", code);

			HttpHeaders headers = new HttpHeaders();
			headers.add("Context-type", "application/x-www-form-urlencoded");

			HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(map, headers);

			// 사용자 인증정보 요청
			ResponseEntity<Map> rs = rest.postForEntity("https://kauth.kakao.com/oauth/token", entity, Map.class);

			// access_token, refresh_token Get
			String Access = rs.getBody().get("access_token").toString();
			String Refresh = rs.getBody().get("refresh_token").toString();
			
			System.out.println("Access : " + Access);
			System.out.println("Refresh : " + Refresh);

			MultiValueMap<String, String> map1 = new LinkedMultiValueMap<>();
//			map1.add("grant_type", "authorization_code");
//			map1.add("client_id", "3829a14694ef09f4dd5c3d5307e22b60");
//			map1.add("redirect_uri", "http://localhost:8090/spring-jwt-test01/kakao-redirect-test");
//			map1.add("code", code);
////			map1.add("property_keys", "[\"properties.nickname\",\"properties.profile_image\"]");

			
			HttpHeaders headers1 = new HttpHeaders();
			headers1.add("Context-type", "application/x-www-form-urlencoded");
			headers1.add("Authorization", "Bearer "+Access);
			// 이거 왜... map1이 아니라 map2로 쏴야 나오냐...
			HttpEntity<MultiValueMap<String, String>> entity1 = new HttpEntity<>(map1, headers1);
			ResponseEntity<Map> rs1 = rest.postForEntity("https://kapi.kakao.com/v2/user/me", entity1, Map.class);
			kakaoAccount1 = rs1.getBody().get("kakao_account").toString();

			System.out.println("kakaoAccount1 : " + kakaoAccount1);						

			
		} catch (Exception e) {
			e.printStackTrace();
		}
        
		hashMap.put("aa", kakaoAccount1);
		return hashMap;
	}
	


}
