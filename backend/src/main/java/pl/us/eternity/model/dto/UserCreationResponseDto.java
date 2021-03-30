package pl.us.eternity.model.dto;
import lombok.Data;

@Data
public class UserCreationResponseDto {

    private Long _id;
    private String name;
    private String email;
    private boolean isAdmin;
    private String token;


}
