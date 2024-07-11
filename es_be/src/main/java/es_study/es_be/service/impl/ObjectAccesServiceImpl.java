package es_study.es_be.service.impl;

import es_study.es_be.model.Account;
import es_study.es_be.model.ObjectAccess;
import es_study.es_be.model.Topic;
import es_study.es_be.model.TopicObjectAccess;
import es_study.es_be.repositoy.ObjectAccessRepositoryDAO;
import es_study.es_be.repositoy.TopicObjectAccessRepositoryDAO;
import es_study.es_be.service.itf.ObjectAccessServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ObjectAccesServiceImpl implements ObjectAccessServiceInterface {
    private final ObjectAccessRepositoryDAO repo;
    private final TopicObjectAccessRepositoryDAO topicObjectAccessRepo;

    public ObjectAccesServiceImpl(ObjectAccessRepositoryDAO repo, TopicObjectAccessRepositoryDAO topicObjectAccessRepo) {
        this.repo = repo;
        this.topicObjectAccessRepo = topicObjectAccessRepo;
    }

    @Autowired


    @Override
    public List<ObjectAccess> getAllObjectAccess() {
        return repo.findAll();
    }

    @Override
    public List<TopicObjectAccess> addObjectsAccess(String[] accountsAccessId, Long topicId) {
        List<TopicObjectAccess> topicObjectAccesses = Arrays.stream(accountsAccessId).map(e->{
            TopicObjectAccess access = TopicObjectAccess.builder().
                    topic(Topic.builder().id(topicId).build()).
                    objectAccess(ObjectAccess.builder().id(3L).build()).
                    account(Account.builder().username(e).build()).
                    build();
            return access;
        }).collect(Collectors.toList());
        topicObjectAccessRepo.saveAll(topicObjectAccesses);
        return topicObjectAccesses;
    }
}
