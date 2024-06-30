package es_study.es_be.model.notification;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class SuccessObject<T> {

    private int successCode;
    private String successMessage;
    private T object;

    public SuccessObject(int successCode, String successMessage, T object) {
        this.successCode = successCode;
        this.successMessage = successMessage;
        this.object = object;
    }
}
