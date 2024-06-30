package es_study.es_be.service.itf;

import es_study.es_be.response.topic.TopicDisplayResponse;

import java.util.List;

public interface TopicServiceInterface {
    List<TopicDisplayResponse> getListTopicDisplayResponseByNoteBookId(Long noteBookId);
}
