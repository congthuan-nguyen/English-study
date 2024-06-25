package es_study.es_be.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "NoteBook", schema = "user_es")
@Data
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NoteBook extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "username")
    private Account account;

    @Column(name = "name")
    private String name;
}
