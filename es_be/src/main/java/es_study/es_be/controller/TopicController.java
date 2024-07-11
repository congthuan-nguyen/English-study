package es_study.es_be.controller;

import es_study.es_be.request.topic.TopicCreateRequest;
import es_study.es_be.response.topic.TopicDisplayResponse;
import es_study.es_be.service.itf.TopicServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/es-study/topic")
public class TopicController {

    private final TopicServiceInterface service;

    @Autowired
    public TopicController(TopicServiceInterface service) {
        this.service = service;
    }

    @GetMapping(path = "/getListTopicDisplayResponseByNoteBookId")
    public List<TopicDisplayResponse> getListTopicDisplayResponseByNoteBookId(@RequestParam() Long id){
        return service.getListTopicDisplayResponseByNoteBookId(id);
    }

    @PostMapping("/createTopic")
    public ResponseEntity<?> createTopic(@RequestBody TopicCreateRequest request){
        return ResponseEntity.ok(service.createTopic(request));
    }
}
