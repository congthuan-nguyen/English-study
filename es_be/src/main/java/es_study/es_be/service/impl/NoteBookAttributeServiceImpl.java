package es_study.es_be.service.impl;

import es_study.es_be.Const.SuccessCode;
import es_study.es_be.message.SuccessMessage;
import es_study.es_be.model.Attribute;
import es_study.es_be.model.notification.SuccessObject;
import es_study.es_be.repositoy.AttributeTypeDetailRepositoryDAO;
import es_study.es_be.repositoy.NoteBookAttributeRepositoryDAO;
import es_study.es_be.request.attribute.AttributeInitializationRequest;
import es_study.es_be.response.notebook_attribute.NoteBookAttributeDisplayResponse;
import es_study.es_be.service.itf.AttributeServiceInterface;
import es_study.es_be.service.itf.NoteBookAttributeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteBookAttributeServiceImpl implements NoteBookAttributeServiceInterface {

    private final NoteBookAttributeRepositoryDAO repo;
    private final AttributeTypeDetailRepositoryDAO attributeTypeDetailRepo;
    private final AttributeServiceInterface attributeService;

    @Autowired
    public NoteBookAttributeServiceImpl
            (NoteBookAttributeRepositoryDAO repo, AttributeTypeDetailRepositoryDAO attributeTypeDetailRepo,
             AttributeServiceInterface attributeService)
    {
        this.repo = repo;
        this.attributeTypeDetailRepo = attributeTypeDetailRepo;
        this.attributeService = attributeService;
    }

    @Override
    public SuccessObject<?> findAllByNoteBookId(Long noteBookId)
    {
        SuccessObject <List<NoteBookAttributeDisplayResponse>> successObject = new SuccessObject<>();
        successObject.setSuccessMessage(SuccessMessage.getSuccessMessage(SuccessCode.SEARCH_SUCCESSFULLY));
        successObject.setSuccessCode(SuccessCode.SEARCH_SUCCESSFULLY);
        successObject.setObject(repo.findAllByNoteBookId(noteBookId));
        return successObject;
    }

    @Override
    public SuccessObject<?> initializationAttributes(List<AttributeInitializationRequest> requests)
    {
        for(AttributeInitializationRequest request : requests)
        {

            Attribute attribute = null;

            attribute = attributeService.create(request.dto());

            attributeTypeDetailRepo.save(request.dtoAttributeTypeDetail(attribute.getId()));

            repo.save(request.dtoNoteBookAttribute(attribute.getId()));
        }
        SuccessObject<String> successObject = new SuccessObject<>(SuccessCode.CREATE_SUCCESSFULLY,
                String.format(SuccessMessage.getSuccessMessage(SuccessCode.CREATE_SUCCESSFULLY), "thuộc tính"),
                null);
        return successObject;
    }
}
