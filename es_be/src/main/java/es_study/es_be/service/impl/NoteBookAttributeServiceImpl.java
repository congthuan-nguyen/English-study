package es_study.es_be.service.impl;

import es_study.es_be.model.Attribute;
import es_study.es_be.model.AttributeTypeDetail;
import es_study.es_be.repositoy.AttributeTypeDetailRepositoryDAO;
import es_study.es_be.repositoy.NoteBookAttributeRepositoryDAO;
import es_study.es_be.request.Attribute.AttributeInitializationRequest;
import es_study.es_be.response.NoteBookAttribute.NoteBookAttributeDisplayResponse;
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
    public List<NoteBookAttributeDisplayResponse> findAllByNoteBookId(Long noteBookId)
    {
        return repo.findAllByNoteBookId(noteBookId);
    }

    @Override
    public String initializationAttributes(List<AttributeInitializationRequest> requests)
    {
        for(AttributeInitializationRequest request : requests){
            System.out.println(request.getName()+ request.getNoteBookId() +"check");

            Attribute attribute = attributeService.create(request.dto());

            attributeTypeDetailRepo.save(request.dtoAttributeTypeDetail(attribute.getId()));

            repo.save(request.dtoNoteBookAttribute(attribute.getId()));
        }
        return "";
    }
}
