package es_study.es_be.exception;

import es_study.es_be.message.ErrorMessage;
import es_study.es_be.model.notification.Error;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionHandlerApplication {

    @ExceptionHandler(CustomException.class)
    public ResponseEntity<?> handleCustomException(CustomException ce){
        String message = String.format(ErrorMessage.getErrorMessage(ce.getErrorCode()), ce.getMessage());
        Error errorMessage = new Error(ce.getErrorCode(), message);
        return ResponseEntity.badRequest().body(errorMessage);
    }
}
