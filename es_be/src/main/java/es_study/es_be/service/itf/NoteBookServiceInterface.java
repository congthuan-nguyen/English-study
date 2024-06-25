package es_study.es_be.service.itf;

import es_study.es_be.model.NoteBook;
import es_study.es_be.response.NoteBook.NoteBookDisplayResponse;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NoteBookServiceInterface {
    NoteBook create(NoteBook noteBook);
    List<NoteBookDisplayResponse> getNoteBooksDisplayByUsername(String username);
}
