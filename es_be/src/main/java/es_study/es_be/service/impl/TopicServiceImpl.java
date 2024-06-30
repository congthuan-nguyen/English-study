package es_study.es_be.service.impl;

import es_study.es_be.repositoy.TopicRepositoryDAO;
import es_study.es_be.response.topic.TopicDisplayResponse;
import es_study.es_be.service.itf.TopicServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicServiceImpl implements TopicServiceInterface
{

    private final TopicRepositoryDAO repo;

    @Autowired
    public TopicServiceImpl(TopicRepositoryDAO repo)
    {
        this.repo = repo;
    }

    @Override
    public List<TopicDisplayResponse> getListTopicDisplayResponseByNoteBookId(Long noteBookId)
    {
        return repo.getListTopicDisplayResponseByNoteBookId(noteBookId);
    }
}
