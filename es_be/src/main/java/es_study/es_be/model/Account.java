package es_study.es_be.model;

import java.time.LocalDateTime;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Account", schema = "user_es")
@Data
@Getter
@Setter
@Builder
public class Account extends BaseEntity {
    @Id
    @Column(name = "username", length = 20)
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "\"firstName\"")
    private String firstName;

    @Column(name = "\"lastName\"")
    private String lastName;

    @Column(name = "dob")
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime dob;

    @Column(name = "gender")
    private Boolean gender;

    @Column(name = "phone", length = 15)
    private String phone;

    @Column(name = "email")
    private String email;
}
