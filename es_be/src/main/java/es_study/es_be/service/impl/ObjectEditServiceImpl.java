package es_study.es_be.service.impl;

import es_study.es_be.model.ObjectAccess;
import es_study.es_be.model.ObjectEdit;
import es_study.es_be.repositoy.ObjectAccessRepositoryDAO;
import es_study.es_be.repositoy.ObjectEditRepositoryDAO;
import es_study.es_be.service.itf.ObjectAccessServiceInterface;
import es_study.es_be.service.itf.ObjectEditServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ObjectEditServiceImpl implements ObjectEditServiceInterface {
    private final ObjectEditRepositoryDAO repo;

    @Autowired
    public ObjectEditServiceImpl(ObjectEditRepositoryDAO repo) {
        this.repo = repo;
    }


    @Override
    public List<ObjectEdit> getAllObjectEdit() {
        return repo.findAll();
    }
}
