package es_study.es_be.controller;

import es_study.es_be.service.itf.AttributeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/es-study/attribute")
public class AttributeController {

    private final AttributeServiceInterface service;

    @Autowired
    public AttributeController(AttributeServiceInterface service) {
        this.service = service;
    }

    @GetMapping("/findByName")
    public ResponseEntity<?> findByName(@RequestParam String name, @RequestParam String username){
        return ResponseEntity.ok(service.findAttributeByName(name, "cthun"));
    }

    @GetMapping("/getAttributeExistByName")
    public ResponseEntity<?> getAttributeExistByName(@RequestParam String name, @RequestParam String username){
        return ResponseEntity.ok(service.getAttributeExistByName(name, "cthun"));
    }
}
