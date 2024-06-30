package es_study.es_be.repositoy;

import es_study.es_be.model.Topic;
import es_study.es_be.response.topic.TopicDisplayResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TopicRepositoryDAO extends JpaRepository<Topic, Long> {
    @Query("SELECT T.id AS id, T.name AS name, T.description as description, " +
            "(SELECT COUNT(I.id) FROM Interaction I " +
            "left join InteractionType IT on IT.id = I.interactionType.id " +
            "WHERE I.topic.id = T.id AND IT.id = 1) AS share ," +
            "(SELECT COUNT(I.id) FROM Interaction I " +
            "left join InteractionType IT on IT.id = I.interactionType.id" +
            " WHERE I.topic.id = T.id AND IT.id = 4) AS view " +
            "FROM Topic T where id = :noteBookId"
            )
    List<TopicDisplayResponse> getListTopicDisplayResponseByNoteBookId(@Param("noteBookId") Long noteBookId);
}
