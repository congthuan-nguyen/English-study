package es_study.es_be.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "AttributeTypeDetail", schema = "user_es")
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AttributeTypeDetail extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "attributeTypeId")
    private AttributeType attributeType;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "attributeId")
    private Attribute attribute;

}
