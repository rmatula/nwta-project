package pl.us.eternity.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.us.eternity.model.dto.UserCreationResponseDto;
import pl.us.eternity.model.dto.UserRegistrationDto;
import pl.us.eternity.service.UserService;
import javax.validation.Valid;

@CrossOrigin("*")
@RestController
@RequestMapping("api/users")
public class UserRegistrationController {
    private UserService userService;


    public UserRegistrationController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(path = "/register")
    public ResponseEntity<UserCreationResponseDto> registerUserAccount(@RequestBody @Valid UserRegistrationDto userRegistrationDto) {
        return ResponseEntity.ok(userService.save(userRegistrationDto));
    }

    @GetMapping(path = "/example")
    public String example() {
        return "exampleSecured";


    }

}
