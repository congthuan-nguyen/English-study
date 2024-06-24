package es_study.es_be.service.impl;

import es_study.es_be.model.NoteBookAttribute;
import es_study.es_be.repositoy.NoteBookAttributeRepositoryDAO;
import es_study.es_be.response.NoteBook.NoteBookDisplayResponse;
import es_study.es_be.response.NoteBookAttribute.NoteBookAttributeDisplayResponse;
import es_study.es_be.service.itf.NoteBookAttributeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteBookAttributeServiceImpl implements NoteBookAttributeServiceInterface {

    private final NoteBookAttributeRepositoryDAO repo;

    @Autowired
    public NoteBookAttributeServiceImpl(NoteBookAttributeRepositoryDAO repo) {
        this.repo = repo;
    }

    @Override
    public List<NoteBookAttributeDisplayResponse> findAllByNoteBookId(Long noteBookId)
    {
        return repo.findAllByNoteBookId(noteBookId);
    }
}
