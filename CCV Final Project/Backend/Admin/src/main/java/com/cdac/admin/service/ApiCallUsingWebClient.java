package com.cdac.admin.service;

public class ApiCallUsingWebClient {

//	private static final Logger logger = LoggerFactory.getLogger(ApiCallUsingWebClient.class);
//
//	private static final String studentMicroserviceBaseURL = "http://student-service";
//	
//	private final WebClient.Builder loadBalancedWebClientBuilder;
//	
//	public ApiCallUsingWebClient(WebClient.Builder webClientBuilder,
//		      ReactorLoadBalancerExchangeFilterFunction lbFunction) {
//		    this.loadBalancedWebClientBuilder = webClientBuilder;
//		  }
//	
//	public Mono<StudentDto> getCourseDetails(String uid) {
//			logger.info("calling course microservice API using Web-Client");
//				
//		    return loadBalancedWebClientBuilder.build().get().uri
//		    		(studentMicroserviceBaseURL + "/course/id?id=" + uid)
//		        .retrieve().bodyToMono(StudentDto.class);
//		    
//		return null;
//		
//	}

}
