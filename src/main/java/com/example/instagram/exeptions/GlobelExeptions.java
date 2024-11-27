package com.example.instagram.exeptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@ControllerAdvice
public class GlobelExeptions {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorDetail> otherExeptionHandler(Exception ue,
                                                            WebRequest request){
        ErrorDetail errorDetail = new ErrorDetail(ue.getMessage(), request.getDescription(false), LocalDateTime.now());

        return new ResponseEntity<ErrorDetail>(errorDetail, HttpStatus.BAD_REQUEST);
    }
}
