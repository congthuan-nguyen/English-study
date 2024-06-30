package es_study.es_be.repositoy;

import es_study.es_be.model.NoteBook;
import es_study.es_be.response.notebook.NoteBookDisplayResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteBookRepositoryDAO extends JpaRepository<NoteBook, Long> {
    @Query("select n.id as id, n.name as name, count (na.id) > 1 as initialization from NoteBook n " +
            "left join NoteBookAttribute na on n.id = na.noteBook.id " +
            "group by id, name")
    List<NoteBookDisplayResponse> getNoteBooksDisplayByUsername(String username);

    Boolean existsNoteBookByNameAndAccount_Username(String name, String username);
}
