package es_study.es_be.controller;

import es_study.es_be.model.NoteBook;
import es_study.es_be.request.NoteBookCreateRequest;
import es_study.es_be.response.NoteBook.NoteBookDisplayResponse;
import es_study.es_be.service.itf.NoteBookServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/es-study/notebook")
public class NoteBookController {
    private final NoteBookServiceInterface service;

    @Autowired
    public NoteBookController(NoteBookServiceInterface service) {
        this.service = service;
    }

    @GetMapping(path = "/getNoteBooksDisplayResponse")
    public List<NoteBookDisplayResponse> getNoteBooksDisplayResponse(@RequestParam(defaultValue = "") String username){
        return service.getNoteBooksDisplayByUsername(username);
    }

    @PostMapping(path = "/createNoteBook")
    public NoteBook createNoteBook(@RequestBody NoteBookCreateRequest request){
        NoteBook noteBook = request.dto();
        return service.create(noteBook);
    }
}
