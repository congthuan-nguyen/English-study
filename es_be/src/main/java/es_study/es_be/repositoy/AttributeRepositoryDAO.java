package es_study.es_be.repositoy;

import es_study.es_be.model.Attribute;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttributeRepositoryDAO extends JpaRepository<Attribute, Long> {
}
