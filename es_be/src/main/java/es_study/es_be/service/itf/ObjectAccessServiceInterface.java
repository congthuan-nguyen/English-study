package es_study.es_be.service.itf;

import es_study.es_be.model.Attribute;
import es_study.es_be.model.ObjectAccess;
import es_study.es_be.model.notification.SuccessObject;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ObjectAccessServiceInterface {
    List<ObjectAccess> getAllObjectAccess();

}
