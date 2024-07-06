package es_study.es_be.service.impl;

import es_study.es_be.repositoy.AccountRepositoryDAO;
import es_study.es_be.response.Account.AccountDisplayUNPObjectResponse;
import es_study.es_be.service.itf.AccountServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountServiceImpl implements AccountServiceInterface {
    private final AccountRepositoryDAO repo;

    @Autowired
    public AccountServiceImpl(AccountRepositoryDAO repo) {
        this.repo = repo;
    }

    @Override
    public List<AccountDisplayUNPObjectResponse> getAllAccountDisplayUNP() {
        return repo.getAllAccountDisplayUNP();
    }
}
