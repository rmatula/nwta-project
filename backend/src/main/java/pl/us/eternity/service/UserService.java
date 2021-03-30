package pl.us.eternity.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import pl.us.eternity.model.dto.UserCreationResponseDto;
import pl.us.eternity.model.dto.UserRegistrationDto;
import pl.us.eternity.model.entity.User;
import pl.us.eternity.model.repository.UserRepository;

import java.util.Date;

@Service
public class UserService {

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserCreationResponseDto save(UserRegistrationDto userRegistrationDto) {
        userRegistrationDto.setPassword(bCryptPasswordEncoder.encode(userRegistrationDto.getPassword()));
        User user = new User(
                userRegistrationDto.getName(),
                userRegistrationDto.getEmail(),
                userRegistrationDto.getPassword()
        );

        //dać poprawne exception
        if (userRepository.findByEmail(userRegistrationDto.getEmail()).isPresent()) {
            throw new NumberFormatException();
        }

        userRepository.save(user);

        UserCreationResponseDto userCreationResponseDto = new UserCreationResponseDto();
        userCreationResponseDto.set_id(user.get_id());
        userCreationResponseDto.setAdmin(user.isAdmin());
        userCreationResponseDto.setEmail(user.getEmail());
        userCreationResponseDto.setName(user.getName());
        userCreationResponseDto.setToken(generateToken(user));

        return userCreationResponseDto;
    }

    private String generateToken(User user) {
        long currentTimeMillis = System.currentTimeMillis();
        return Jwts.builder()
                .setSubject(user.getName())
                .claim("roles", "user")
                .setIssuedAt(new Date(currentTimeMillis))
                .setExpiration(new Date(currentTimeMillis + 3600000))
                .signWith(SignatureAlgorithm.HS512, "qwertyuiop")
                .compact();
        //return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    }

}
