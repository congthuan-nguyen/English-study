package es_study.es_be.service.itf;

import es_study.es_be.response.Topic.TopicDisplayResponse;

import java.util.List;

public interface TopicServiceInterface {
    List<TopicDisplayResponse> getListTopicDisplayResponseByNoteBookId(Long noteBookId);
}
