package es_study.es_be.service.itf;

import es_study.es_be.model.Attribute;
import es_study.es_be.model.notification.SuccessObject;
import es_study.es_be.response.attribute.AttributeResponse;
import org.springframework.data.repository.query.Param;

import java.util.List;
public interface AttributeServiceInterface {
    Attribute create(Attribute attribute);
    List<Attribute> getAllAttribute();
    SuccessObject<?> findAttributeByName(String name, String username);
    SuccessObject<?> getAttributeExistByName(@Param("name") String name, @Param("username") String username);

}
