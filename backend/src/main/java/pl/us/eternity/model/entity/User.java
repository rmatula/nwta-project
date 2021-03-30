package pl.us.eternity.model.entity;

import lombok.Builder;
import lombok.Data;
import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;

@Data
@Entity(name = "eternity_user")
@Table(name = "eternity_user", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, name = "id")
    private Long _id;

    @Column(name = "name", nullable = false)
    @Size(min = 3, max = 25)
    private String name;

    @Column(unique = true, name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    @Size(min = 1)
    private String password;

    @Column(name = "createdAt")
    @Builder.Default
    private Date createdAt = new Date();

    @Column(name = "isAdmin", nullable = false)
    @Builder.Default
    private boolean isAdmin = false;


    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public User() {

    }
}
