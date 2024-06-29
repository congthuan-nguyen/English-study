package es_study.es_be.service.impl;

import es_study.es_be.Const.ValueDefault;
import es_study.es_be.model.Attribute;
import es_study.es_be.repositoy.AttributeRepositoryDAO;
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
}
