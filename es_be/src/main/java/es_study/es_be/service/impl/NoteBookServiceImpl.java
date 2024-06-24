package es_study.es_be.service.impl;

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
    public List<NoteBookDisplayResponse> getNoteBooksDisplayByUsername(String username) {
        return repo.getNoteBooksDisplayByUsername(username);
    }
}
