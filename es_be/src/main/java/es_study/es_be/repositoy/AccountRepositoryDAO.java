package es_study.es_be.repositoy;

import es_study.es_be.model.Account;
import es_study.es_be.response.Account.AccountDisplayUNPObjectResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface AccountRepositoryDAO extends JpaRepository<Account, String> {
    @Query("SELECT " +
            "    acc.username as username, " +
            "    acc.lastName as lastName, " +
            "    acc.firstName as firstName," +
            "    p.value as photo " +
            "FROM " +
            "    Account acc " +
            "LEFT JOIN " +
            "    Photo p ON acc.photoId = p.id")
    List<AccountDisplayUNPObjectResponse> getAllAccountDisplayUNP();
}
