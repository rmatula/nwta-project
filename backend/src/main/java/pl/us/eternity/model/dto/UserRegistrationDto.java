package pl.us.eternity.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
public class UserRegistrationDto {

    @NotNull
    @Size(min = 3, max  = 25)
    private String name;

    @NotNull
    private String email;

    @NotNull
    @Size(min = 1)
    private String password;


}
