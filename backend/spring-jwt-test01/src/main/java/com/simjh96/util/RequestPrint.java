package com.simjh96.util;

import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;

public class RequestPrint {
	public HttpServletRequest request;

	public RequestPrint(HttpServletRequest request) {
		super();
		System.out.println("========================================");
		System.out.println("request : " + request);
		for (Iterator<String> requestHeaders = request.getHeaderNames().asIterator(); requestHeaders.hasNext();) {
			String header = requestHeaders.next();
			String value = request.getHeader(header);
			System.out.println(" " + header + " : " + value);
		}

		for (Iterator<String> requestParams = request.getParameterNames().asIterator(); requestParams.hasNext();) {
			String param = requestParams.next();
			String value = request.getParameter(param);
			System.out.println(" " + param + " : " + value);
		}
	}
}
