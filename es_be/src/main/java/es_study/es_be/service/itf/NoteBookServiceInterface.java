package es_study.es_be.service.itf;

import es_study.es_be.model.NoteBook;
import es_study.es_be.response.notebook.NoteBookDisplayResponse;

import java.util.List;

public interface NoteBookServiceInterface {
    NoteBook create(NoteBook noteBook, String username);
    List<NoteBookDisplayResponse> getNoteBooksDisplayByUsername(String username);
}
