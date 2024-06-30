package es_study.es_be.service.itf;

import es_study.es_be.model.notification.SuccessObject;
import es_study.es_be.request.attribute.AttributeInitializationRequest;

import java.util.List;

public interface NoteBookAttributeServiceInterface {
    SuccessObject<?> findAllByNoteBookId(Long noteBookId);
    SuccessObject<?> initializationAttributes (List<AttributeInitializationRequest> requests);
}
