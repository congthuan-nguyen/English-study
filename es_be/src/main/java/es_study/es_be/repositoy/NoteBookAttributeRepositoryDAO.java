package es_study.es_be.repositoy;

import es_study.es_be.model.NoteBookAttribute;
import es_study.es_be.response.NoteBookAttribute.NoteBookAttributeDisplayResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteBookAttributeRepositoryDAO extends JpaRepository<NoteBookAttribute, Long> {
    @Query("Select nba.id as id, nba.attribute.name as name from NoteBookAttribute nba where nba.noteBook.id = :noteBookId")
    List<NoteBookAttributeDisplayResponse> findAllByNoteBookId(@Param("noteBookId") Long noteBookId);
}
