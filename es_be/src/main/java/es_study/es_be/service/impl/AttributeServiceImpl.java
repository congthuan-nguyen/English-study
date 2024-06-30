package es_study.es_be.service.impl;

import es_study.es_be.Const.SuccessCode;
import es_study.es_be.model.Attribute;
import es_study.es_be.model.notification.SuccessObject;
import es_study.es_be.repositoy.AttributeRepositoryDAO;
import es_study.es_be.response.attribute.AttributeResponse;
import es_study.es_be.service.itf.AttributeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttributeServiceImpl implements AttributeServiceInterface {
    private final AttributeRepositoryDAO repo;

    @Autowired
    public AttributeServiceImpl(AttributeRepositoryDAO repo) {
        this.repo = repo;
    }

    @Override
    public Attribute create(Attribute attribute) {
        return repo.save(attribute);
    }

    @Override
    public List<Attribute> getAllAttribute() {
        return repo.findAll();
    }

    @Override
    public SuccessObject<?> findAttributeByName(String name, String username) {
        List<AttributeResponse> attributeResponeList = repo.findAttributesByName("%"+name.toLowerCase()+"%", username);

        SuccessObject<List<AttributeResponse>> successObject = new SuccessObject<>(SuccessCode.SEARCH_SUCCESSFULLY,
                "", attributeResponeList);

        return successObject;
    }
}
