package com.simjh96.mybatis;

import com.simjh96.model.AuthDto;
import com.simjh96.model.MemberDto;

public interface MemberMapper {
	public MemberDto read(String nickname);
	public int updateByPk(MemberDto memberDto);
	public String getNickname(String kakaopk);
	public int insertMember(MemberDto memberDto);
	public int insertAuth(AuthDto authDto);
	public int idCheck(String nickname);
}
