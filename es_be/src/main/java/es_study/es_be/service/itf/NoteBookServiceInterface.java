package es_study.es_be.service.itf;

import es_study.es_be.response.NoteBook.NoteBookDisplayResponse;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NoteBookServiceInterface {
    List<NoteBookDisplayResponse> getNoteBooksDisplayByUsername(String username);
}
