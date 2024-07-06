package es_study.es_be.controller;

import es_study.es_be.Const.SuccessCode;
import es_study.es_be.model.notification.SuccessObject;
import es_study.es_be.service.itf.AccountServiceInterface;
import es_study.es_be.service.itf.AttributeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/es-study/account")
public class AccountController {

    private final AccountServiceInterface service;

    @Autowired
    public AccountController(AccountServiceInterface service) {
        this.service = service;
    }

    @GetMapping("/getAllAccountDisplayDNP")
    public ResponseEntity<?> getAllAccountDisplayDNP(){
        return ResponseEntity.ok(service.getAllAccountDisplayUNP());
    }

}
