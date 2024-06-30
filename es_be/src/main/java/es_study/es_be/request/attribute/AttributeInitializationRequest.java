package es_study.es_be.request.attribute;

import es_study.es_be.model.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AttributeInitializationRequest {
    private Long id;
    private String name;
    private Long attributeTypeId;
    private Long noteBookId;
    private Integer width;
    private Long copyFrom;

    public Attribute dto(){
        Attribute attribute = new Attribute(id, name);
        return attribute;
    }

    public AttributeTypeDetail dtoAttributeTypeDetail(Long attributeId){
        AttributeTypeDetail attributeTypeDetail = AttributeTypeDetail.builder().
                attributeType(AttributeType.builder().id(attributeTypeId).build()).
                attribute(Attribute.builder().id(attributeId).build()).build();
        return attributeTypeDetail;
    }

    public NoteBookAttribute dtoNoteBookAttribute(Long attributeId){
        NoteBookAttribute noteBookAttribute = NoteBookAttribute.builder().
                attribute(Attribute.builder().id(attributeId).build()).
                noteBook(NoteBook.builder().id(noteBookId).build()).copyFrom(copyFrom).build();
        return noteBookAttribute;
    }
}
