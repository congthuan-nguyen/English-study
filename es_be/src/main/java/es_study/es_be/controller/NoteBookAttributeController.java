package es_study.es_be.controller;

import es_study.es_be.request.attribute.AttributeInitializationRequest;
import es_study.es_be.service.itf.NoteBookAttributeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/es-study/notebook_attribute")
public class NoteBookAttributeController {

    private final NoteBookAttributeServiceInterface service;

    @Autowired
    public NoteBookAttributeController(NoteBookAttributeServiceInterface service) {
        this.service = service;
    }

    @GetMapping(path = "/findAllByNoteBookId")
    public ResponseEntity<?> findAllByNoteBookId(@RequestParam Long noteBookId){
        return ResponseEntity.ok(service.findAllByNoteBookId(noteBookId));
    }

    @PostMapping(path = "/initializationNoteBookAttribute")
    public ResponseEntity<?> initializationNoteBookAttribute(@RequestBody List<AttributeInitializationRequest> attributes){
        return ResponseEntity.ok(service.initializationAttributes(attributes));
    }
}
