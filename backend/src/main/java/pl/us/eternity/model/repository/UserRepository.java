package pl.us.eternity.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.us.eternity.model.entity.User;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
}
