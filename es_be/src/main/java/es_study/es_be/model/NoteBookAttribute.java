package es_study.es_be.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "NoteBookAttribute", schema = "user_es")
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
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

    @Column(name = "copyfrom")
    private Long copyFrom;

}
