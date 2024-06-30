package es_study.es_be.service.impl;

import es_study.es_be.Const.ErrorCode;
import es_study.es_be.exception.CustomException;
import es_study.es_be.model.NoteBook;
import es_study.es_be.repositoy.NoteBookRepositoryDAO;
import es_study.es_be.response.notebook.NoteBookDisplayResponse;
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
    public NoteBook create(NoteBook noteBook, String username) {
        Boolean isExist = repo.existsNoteBookByNameAndAccount_Username(noteBook.getName(), username);
        if(isExist){
            throw new CustomException(ErrorCode.NAME_IS_EXIST, "sổ tay");
        }
        try{
            return repo.save(noteBook);
        }catch (CustomException ce){
            throw new CustomException(ErrorCode.SYSTEM_ERROR, "");
        }
    }

    @Override
    public List<NoteBookDisplayResponse> getNoteBooksDisplayByUsername(String username) {
        return repo.getNoteBooksDisplayByUsername(username);
    }
}
