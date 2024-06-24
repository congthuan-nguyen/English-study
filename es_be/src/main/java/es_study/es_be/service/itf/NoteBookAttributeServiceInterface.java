package es_study.es_be.service.itf;

import es_study.es_be.model.NoteBookAttribute;
import es_study.es_be.response.NoteBook.NoteBookDisplayResponse;
import es_study.es_be.response.NoteBookAttribute.NoteBookAttributeDisplayResponse;

import java.util.List;

public interface NoteBookAttributeServiceInterface {
    List<NoteBookAttributeDisplayResponse> findAllByNoteBookId(Long noteBookId);
}
