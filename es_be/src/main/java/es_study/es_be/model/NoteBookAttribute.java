package es_study.es_be.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "NoteBookAttribute", schema = "user_es")
@Data
@Getter
@Setter
public class NoteBookAttribute extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "notebookid")
    private NoteBook noteBook;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "attributeid")
    private Attribute attribute;

}
