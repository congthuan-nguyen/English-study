package es_study.es_be.service.itf;

import es_study.es_be.model.Attribute;
import java.util.List;
public interface AttributeServiceInterface {
    Attribute create(Attribute attribute);
    List<Attribute> getAllAttribute();
}
