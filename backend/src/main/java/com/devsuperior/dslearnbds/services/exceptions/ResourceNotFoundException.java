
package com.devsuperior.dslearnbds.services.exceptions;

public class ResourceNotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	// uso do "super" é pra passar o valor do argumento para o construtor da super
	// classe.

	public ResourceNotFoundException(String msg) {
		super(msg);
	}
}
