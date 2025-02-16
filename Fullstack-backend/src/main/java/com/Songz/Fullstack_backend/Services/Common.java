package com.Songz.Fullstack_backend.Services;

import org.springframework.http.ResponseEntity;

public interface Common<I,O> {
    public ResponseEntity<O> exe(I input);
}
