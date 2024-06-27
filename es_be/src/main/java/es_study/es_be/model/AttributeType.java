package es_study.es_be.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "AttributeType", schema = "user_es")
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AttributeType extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;
}
