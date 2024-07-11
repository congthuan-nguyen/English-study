package es_study.es_be.service.itf;

import es_study.es_be.model.ObjectAccess;
import es_study.es_be.model.ObjectEdit;
import es_study.es_be.model.TopicObjectAccess;
import es_study.es_be.model.TopicObjectEdit;

import java.util.List;

public interface ObjectEditServiceInterface {
    List<ObjectEdit> getAllObjectEdit();
    List<TopicObjectEdit> addObjectsEdit(String [] accountsAccessId, Long topicId);
}
