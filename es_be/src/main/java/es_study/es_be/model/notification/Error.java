package es_study.es_be.model.notification;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Error {

    private int errorCode;
    private String message;

    public Error(int errorCode, String message) {
        this.errorCode = errorCode;
        this.message = message;
    }
}

