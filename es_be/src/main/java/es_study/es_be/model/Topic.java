package es_study.es_be.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Topic", schema = "user_es")
@Data
@Getter
@Setter
public class Topic extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "notebookid")
    private NoteBook noteBook;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "objectAccessid")
    private ObjectAccess objectAccess;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "objectEditid")
    private ObjectEdit objectEdit;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

}
