package es_study.es_be.Message;

import lombok.Data;

import java.util.Map;
import java.util.HashMap;

@Data
public class ErrorMessage {

    private static final Map<Integer, String> errorsMessage= new HashMap<>();

    static  {
        errorsMessage.put(001, "Hệ thống gặp lỗi!\nVui lòng thử lại sau!");
        errorsMessage.put(100, "Tên %s đã tồn tại!");
    }

    public static String getErrorMessage(Integer code){
        if(errorsMessage.containsKey(code)){
            return errorsMessage.get(code);
        }else{
            return errorsMessage.get(001);
        }
    }

}
