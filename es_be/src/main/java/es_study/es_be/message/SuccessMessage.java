package es_study.es_be.message;

import es_study.es_be.Const.ErrorCode;

import java.util.HashMap;
import java.util.Map;

public class SuccessMessage {
    private static final Map<Integer, String> successMessages= new HashMap<>();

    static  {
        successMessages.put(200, "Thêm mới %s thành công!");
        successMessages.put(201, "Cập nhật %s thành công!");
        successMessages.put(202, "Tìm kiếm thành công!");
    }

    public static String getSuccessMessage(Integer code){
        if(successMessages.containsKey(code)){
            return successMessages.get(code);
        }else{
            return ErrorMessage.getErrorMessage(ErrorCode.SYSTEM_ERROR);
        }
    }
}
