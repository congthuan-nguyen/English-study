package es_study.es_be.service.impl;

import es_study.es_be.model.Attribute;
import es_study.es_be.model.AttributeType;
import es_study.es_be.repositoy.AttributeTypeRepositoryDAO;
import es_study.es_be.service.itf.AttributeTypeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttributeTypeServiceImpl implements AttributeTypeServiceInterface {

    private final AttributeTypeRepositoryDAO repo;

    @Autowired
    public AttributeTypeServiceImpl(AttributeTypeRepositoryDAO repo) {
        this.repo = repo;
    }

    @Override
    public List<AttributeType> getAllAttributeType() {
        return repo.findAll();
    }
}
