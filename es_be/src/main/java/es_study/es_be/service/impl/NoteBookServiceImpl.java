package es_study.es_be.service.impl;

import es_study.es_be.model.NoteBook;
import es_study.es_be.repositoy.NoteBookRepositoryDAO;
import es_study.es_be.response.NoteBook.NoteBookDisplayResponse;
import es_study.es_be.service.itf.NoteBookServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteBookServiceImpl implements NoteBookServiceInterface {

    private final NoteBookRepositoryDAO repo;

    @Autowired
    public NoteBookServiceImpl(NoteBookRepositoryDAO repo) {
        this.repo = repo;
    }

    @Override
    public NoteBook create(NoteBook noteBook) {
        return repo.save(noteBook);
    }

    @Override
    public List<NoteBookDisplayResponse> getNoteBooksDisplayByUsername(String username) {
        return repo.getNoteBooksDisplayByUsername(username);
    }
}
