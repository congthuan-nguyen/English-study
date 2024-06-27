package es_study.es_be.repositoy;

import es_study.es_be.model.AttributeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttributeTypeRepositoryDAO extends JpaRepository<AttributeType, Long> {
}
