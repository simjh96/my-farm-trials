// https://www.youtube.com/watch?v=VVn9OG9nfH0
// https://www.youtube.com/watch?v=X80nJ5T7YpE

package com.simjh96.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.simjh96.model.MemberDto;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class JwtUtil {
	private String SECRET_KEY = "secret";
	
	public String extractUsername(String token) {
		return extractClaim(token, Claims::getSubject);
	}
	
	public Date extractExpiration(String token) {
		return extractClaim(token, Claims::getExpiration);
	}

	public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = extractAllClaims(token);
		return claimsResolver.apply(claims);
	}
	private Claims extractAllClaims(String token) {
		return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
	}
	private Boolean isTokenExpired(String token) {
		return extractExpiration(token).before(new Date());
	}
	public String generateToken(MemberDto memberDto, String issuer, Boolean accessToken) {
		Map<String,Object> claims = new HashMap<>();
		
		if (accessToken) {
			// db의 roles 랑 충돌 가능,,,
			claims.put("roles", memberDto.getAuthList());
			claims.put("kakaothumb", memberDto.getKakaothumb());
			claims.put("kakaoname", memberDto.getKakaoname());
			return createAccessToken(claims, memberDto.getNickname(), issuer);	
		} else {
			return createRefreshToken(claims, memberDto.getNickname(), issuer);
		}
	}

	
	private String createAccessToken(Map<String,Object> claims, String subject,String issuer) {
		return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 1000*60*10))
				.setIssuer(issuer)
				.signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
	}
	
	private String createRefreshToken(Map<String,Object> claims, String subject,String issuer) {
		return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 1000*60*60*10))
				.setIssuer(issuer)
				.signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
	}
	public Boolean validateToken(String token, UserDetails userDetails) {
		final String username = extractUsername(token);
		return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
	}
}
