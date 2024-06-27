package es_study.es_be.repositoy;

import es_study.es_be.model.AttributeTypeDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttributeTypeDetailRepositoryDAO extends JpaRepository<AttributeTypeDetail, Long> {
}
