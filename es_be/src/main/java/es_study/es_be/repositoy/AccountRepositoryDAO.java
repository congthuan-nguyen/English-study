package es_study.es_be.repositoy;

import es_study.es_be.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepositoryDAO extends JpaRepository<Account, String> {
}
