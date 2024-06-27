package es_study.es_be.controller;

import es_study.es_be.service.itf.AttributeTypeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/es-study/attribute_type")
public class AttributeTypeController {

    private final AttributeTypeServiceInterface service;

    @Autowired
    public AttributeTypeController(AttributeTypeServiceInterface service) {
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(service.getAllAttributeType());
    }
}
