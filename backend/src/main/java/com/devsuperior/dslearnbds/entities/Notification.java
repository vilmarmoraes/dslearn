package com.devsuperior.dslearnbds.entities;

import java.io.Serializable;
import java.time.Instant;

public class Notification implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String text;
	private Instant moment;
	private Boolean read;
	private String route;

	
	
}
