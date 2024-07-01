package es_study.es_be.repositoy;

import es_study.es_be.model.Attribute;
import es_study.es_be.response.attribute.AttributeResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AttributeRepositoryDAO extends JpaRepository<Attribute, Long> {

    @Query("select a.id as id, a.name as name, na.noteBook.id as notebookId, na.noteBook.name as notebookName " +
            "from Attribute a " +
            "left join NoteBookAttribute na on na.attribute.id = a.id " +
            "where lower(a.name) like :name and na.noteBook.account.username = :username and na.copyFrom is null")
    List<AttributeResponse> findAttributesByName(@Param("name") String name, @Param("username") String username);

    @Query("select a.id as id, a.name as name, na.noteBook.id as notebookId, na.noteBook.name as notebookName " +
            "from Attribute a " +
            "left join NoteBookAttribute na on na.attribute.id = a.id " +
            "where lower(a.name) like :name and na.noteBook.account.username = :username and na.copyFrom is null ")
    List<AttributeResponse> getAttributeExistByName(@Param("name") String name, @Param("username") String username);
}
