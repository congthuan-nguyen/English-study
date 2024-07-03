package es_study.es_be.service.impl;

import es_study.es_be.model.ObjectAccess;
import es_study.es_be.repositoy.ObjectAccessRepositoryDAO;
import es_study.es_be.service.itf.ObjectAccessServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ObjectAccesServiceImpl implements ObjectAccessServiceInterface {
    private final ObjectAccessRepositoryDAO repo;

    @Autowired
    public ObjectAccesServiceImpl(ObjectAccessRepositoryDAO repo) {
        this.repo = repo;
    }


    @Override
    public List<ObjectAccess> getAllObjectAccess() {
        return repo.findAll();
    }
}
