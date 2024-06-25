package es_study.es_be.request;

import es_study.es_be.model.Account;
import es_study.es_be.model.NoteBook;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NoteBookCreateRequest {
    private Long id;
    private String name;
    private String username;

    public NoteBook dto(){
        Account account = Account.builder().username(username).build();
        NoteBook noteBook = NoteBook.builder().id(id).name(name).account(account).build();
        return noteBook;
    }
}
