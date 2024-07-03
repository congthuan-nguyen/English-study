package es_study.es_be.controller;

import es_study.es_be.service.itf.ObjectEditServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/es-study/objectEdit")
public class ObjectEditController {
    private final ObjectEditServiceInterface service;

    @Autowired
    public ObjectEditController(ObjectEditServiceInterface service) {
        this.service = service;
    }

    @GetMapping("")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(service.getAllObjectEdit());
    }
}
