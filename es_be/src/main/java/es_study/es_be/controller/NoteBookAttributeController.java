package es_study.es_be.controller;

import es_study.es_be.model.NoteBookAttribute;
import es_study.es_be.response.NoteBook.NoteBookDisplayResponse;
import es_study.es_be.response.NoteBookAttribute.NoteBookAttributeDisplayResponse;
import es_study.es_be.service.itf.NoteBookAttributeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<NoteBookAttributeDisplayResponse> findAllByNoteBookId(@RequestParam Long noteBookId){
        return service.findAllByNoteBookId(noteBookId);
    }
}
