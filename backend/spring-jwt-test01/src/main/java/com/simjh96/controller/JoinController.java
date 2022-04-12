package com.simjh96.controller;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringEscapeUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.simjh96.model.AuthDto;
import com.simjh96.model.MemberDto;
import com.simjh96.mybatis.MemberMapper;
@RestController
public class JoinController {
	@Autowired
	private MemberMapper memberMapper;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@ResponseBody    
	@PostMapping("/IdCheck.do")
	public Map<String, Object> idCheck(String nickname) {
		System.out.println("nickname in idcheck: "+nickname);
		Map<String,Object> idMap = new HashMap<>();
		int result = memberMapper.idCheck(nickname);
		idMap.put("count", result);
		return idMap;
	}
	@ResponseBody    
	@PostMapping("/JoinStart.do")
	public Map<String, Object> joinStart(String accessToken) {
		
		System.out.println("access_token in JoinStart.do: "+accessToken);
		Map<String,Object> idMap = new HashMap<>();
		// kakao
		RestTemplate rest = new RestTemplate();
		MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
		HttpHeaders headers = new HttpHeaders();
		headers.add("Context-type", "application/x-www-form-urlencoded");
		headers.add("Authorization", "Bearer "+accessToken);
		
		HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(map, headers);
		ResponseEntity<Map> rs = rest.postForEntity("https://kapi.kakao.com/v2/user/me", entity, Map.class);
		System.out.println("kakao response: "+rs.getBody().get("id"));
		System.out.println("kakao response: "+rs.getBody().get("properties"));

		ObjectMapper om = new ObjectMapper();
		om.configure(JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);

		Map m = null;
		try {
			m = om.readValue(rs.getBody().get("properties").toString().replace("http:", "").replace("=", ":\"").replace(",", "\",").replace("}", "\"}"), Map.class);
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// insert member
		MemberDto memberDto = new MemberDto();
		memberDto.setKakaopk(rs.getBody().get("id").toString());
		memberDto.setKakaoname(m.get("nickname").toString());
		memberDto.setKakaothumb(m.get("thumbnail_image").toString());
		
		int result = memberMapper.insertMember(memberDto);
		
		// insert auth kakaopk
		AuthDto authDto = new AuthDto(memberDto.getKakaopk(), "ROLE_MEMBER");
		int result2 = memberMapper.insertAuth(authDto);

		// return
		idMap.put("count", result);
		return idMap;
	}	
	@ResponseBody    
	@PostMapping("/JoinEnd.do")
	public Map<String, Object> join(MemberDto memberDto) {
		Map<String,Object> idMap = new HashMap<>();
		System.out.println("nickname in JoinEnd.do: "+memberDto);
		memberDto.setPassword(passwordEncoder.encode(memberDto.getPassword()));
		int result = memberMapper.updateByPk(memberDto);
		
		// return
		idMap.put("count", result);
		return idMap;
	}	
}
