package es_study.es_be.response.Account;

import jakarta.persistence.Lob;

public interface AccountDisplayUNPObjectResponse {
    String getUsername();
    String getFirstName();
    String getLastName();
    String getPhoto();
}
