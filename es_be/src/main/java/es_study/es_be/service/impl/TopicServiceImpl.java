package es_study.es_be.service.impl;

import es_study.es_be.Const.SuccessCode;
import es_study.es_be.message.SuccessMessage;
import es_study.es_be.model.ObjectEdit;
import es_study.es_be.model.Topic;
import es_study.es_be.model.notification.SuccessObject;
import es_study.es_be.repositoy.TopicRepositoryDAO;
import es_study.es_be.request.topic.TopicCreateRequest;
import es_study.es_be.response.topic.TopicDisplayResponse;
import es_study.es_be.service.itf.ObjectAccessServiceInterface;
import es_study.es_be.service.itf.ObjectEditServiceInterface;
import es_study.es_be.service.itf.TopicServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicServiceImpl implements TopicServiceInterface
{

    private final TopicRepositoryDAO repo;
    private final ObjectAccessServiceInterface objectAccessService;
    private final ObjectEditServiceInterface objectEditService;

    @Autowired
    public TopicServiceImpl(TopicRepositoryDAO repo, ObjectAccessServiceInterface objectAccessService, ObjectEditServiceInterface objectEditService) {
        this.repo = repo;
        this.objectAccessService = objectAccessService;
        this.objectEditService = objectEditService;
    }

    @Override
    public List<TopicDisplayResponse> getListTopicDisplayResponseByNoteBookId(Long noteBookId)
    {
        return repo.getListTopicDisplayResponseByNoteBookId(noteBookId);
    }

    @Override
    public SuccessObject<?> createTopic(TopicCreateRequest request) {
        Topic topic = repo.save(request.dto());
        objectAccessService.addObjectsAccess(request.getObjectAccessAccountsId(), topic.getId());
        objectEditService.addObjectsEdit(request.getObjectAccessAccountsId(), topic.getId());
        SuccessObject successObject = new SuccessObject();
        successObject.setSuccessCode(SuccessCode.CREATE_SUCCESSFULLY);
        successObject.setSuccessMessage(SuccessMessage.getSuccessMessage(SuccessCode.CREATE_SUCCESSFULLY));
        successObject.setObject(topic);
        return successObject;
    }
}
