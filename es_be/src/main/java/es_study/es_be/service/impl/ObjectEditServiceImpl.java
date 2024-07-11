package es_study.es_be.service.impl;

import es_study.es_be.model.*;
import es_study.es_be.repositoy.ObjectAccessRepositoryDAO;
import es_study.es_be.repositoy.ObjectEditRepositoryDAO;
import es_study.es_be.repositoy.TopicObjectEditRepositoryDAO;
import es_study.es_be.service.itf.ObjectAccessServiceInterface;
import es_study.es_be.service.itf.ObjectEditServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ObjectEditServiceImpl implements ObjectEditServiceInterface {
    private final ObjectEditRepositoryDAO repo;
    private final TopicObjectEditRepositoryDAO topicObjectEditRepo;

    @Autowired
    public ObjectEditServiceImpl(ObjectEditRepositoryDAO repo, TopicObjectEditRepositoryDAO topicObjectEditRepo) {
        this.repo = repo;
        this.topicObjectEditRepo = topicObjectEditRepo;
    }

    @Override
    public List<ObjectEdit> getAllObjectEdit() {
        return repo.findAll();
    }

    @Override
    public List<TopicObjectEdit> addObjectsEdit(String[] accountsAccessId, Long topicId) {
        List<TopicObjectEdit> topicObjectEdits = Arrays.stream(accountsAccessId).map(e->{
            TopicObjectEdit access = TopicObjectEdit.builder().
                    topic(Topic.builder().id(topicId).build()).
                    objectEdit(ObjectEdit.builder().id(3L).build()).
                    account(Account.builder().username(e).build()).
                    build();
            return access;
        }).collect(Collectors.toList());
        topicObjectEditRepo.saveAll(topicObjectEdits);
        return topicObjectEdits;
    }
}
