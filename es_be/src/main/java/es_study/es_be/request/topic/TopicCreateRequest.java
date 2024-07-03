package es_study.es_be.request.topic;

public class TopicCreateRequest {
    private Long id;
    private String name;
    private String description;
    private Byte[] photo;
    private Long objectAccessId;
    private Long[] objectAccessAccountsId;
    private Long objectEditId;
    private Long[] objectEditAccountsId;
}
