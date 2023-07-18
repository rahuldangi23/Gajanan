package com.cdac.ccv.Utilities;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

@Component
public class EmailUtil {

	@Autowired
	JavaMailSender mailSender;

	public void sendEmail(String toAddress, String emailBody, String emailSubject) {
		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper messageHelper = new MimeMessageHelper(message);
		try {
			messageHelper.setTo(toAddress);
			messageHelper.setText(emailBody);
			messageHelper.setSubject(emailSubject);
			mailSender.send(message);
		} catch (Exception e) {
			System.out.println(e);
		}
	}
}
