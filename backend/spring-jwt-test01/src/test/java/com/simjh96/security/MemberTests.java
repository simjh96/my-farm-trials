package com.simjh96.security;

import java.sql.Connection;
import java.sql.PreparedStatement;

import javax.sql.DataSource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.simjh96.mybatis.MemberMapper;

import lombok.Setter;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {
	com.simjh96.config.RootAppContext.class, com.simjh96.config.SecurityConfig.class
})
public class MemberTests {
	@Setter(onMethod_ = @Autowired)
	private PasswordEncoder pwencoder;
	
	@Setter(onMethod_ = @Autowired)
	private DataSource ds;
	
	@Test
	public void testInsertMember() {
		System.out.println("testInsertMember");
		String sql = "insert into MYNGUSER (NO, NICKNAME, PASSWORD, ENABLED, KAKAOPK, KAKAOTHUMB, KAKAONAME) VALUES (SEQ_MYNGUSER.nextval, ?, ?, '1', ?, 'KAKAOTHUMB', 'KAKAONAME')";
		for (int i = 0; i < 5; i++) {
			Connection con = null;
			PreparedStatement pstmt = null;
			
			try {
				con = ds.getConnection();
				pstmt = con.prepareStatement(sql);
				pstmt.setString(2, pwencoder.encode("pw"+i));
				pstmt.setString(1, "test"+i);
				pstmt.setString(3, "pk"+i);
				pstmt.executeUpdate();
			} catch(Exception e) {
				e.printStackTrace();
			} finally {
				if (pstmt != null) {try {pstmt.close();}catch(Exception e) {}}
				if (con != null) {try {con.close();}catch(Exception e) {}}
			}
		}
	}
}
