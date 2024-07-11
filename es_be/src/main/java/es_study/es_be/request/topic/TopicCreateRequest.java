package es_study.es_be.request.topic;

import es_study.es_be.model.NoteBook;
import es_study.es_be.model.ObjectAccess;
import es_study.es_be.model.ObjectEdit;
import es_study.es_be.model.Topic;
import lombok.Getter;

@Getter
public class TopicCreateRequest {
    private Long id;
    private Long noteBookId;
    private String name;
    private String description;
    private String photo;
    private Long objectAccessId;
    private String[] objectAccessAccountsId;
    private Long objectEditId;
    private String[] objectEditAccountsId;


    public Topic dto(){
        Topic topic = Topic.builder().
                id(id).name(name).description(description).
                noteBook(NoteBook.builder().id(noteBookId).build()).
                objectAccess(ObjectAccess.builder().id(objectAccessId).build()).
                objectEdit(ObjectEdit.builder().id(objectEditId).build()).
                build();
        return topic;
    }
}
