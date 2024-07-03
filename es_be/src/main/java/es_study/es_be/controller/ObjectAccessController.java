package es_study.es_be.controller;

import es_study.es_be.service.itf.ObjectAccessServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/es-study/objectAccess")
public class ObjectAccessController {
    private final ObjectAccessServiceInterface service;

    @Autowired
    public ObjectAccessController(ObjectAccessServiceInterface service) {
        this.service = service;
    }

    @GetMapping("")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(service.getAllObjectAccess());
    }
}
