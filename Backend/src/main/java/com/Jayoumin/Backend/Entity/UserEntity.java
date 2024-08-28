package com.Jayoumin.Backend.Entity;

import com.Jayoumin.Backend.DTO.UserDTO;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "user")
public class UserEntity {   // table 역할
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String user_id;

    @Column
    private String password;

    @Column (unique = true)
    private String email;

    @Column
    private String nickname;

    @Column
    private LocalDateTime create_at;

    public static UserEntity toUserEntity(UserDTO userDTO){
        UserEntity userEntity = new UserEntity();
        userEntity.setUser_id(userDTO.getUser_id());
        userEntity.setPassword(userDTO.getPassword());
        userEntity.setEmail(userDTO.getEmail());
        userEntity.setNickname(userDTO.getNickname());
        userEntity.setCreate_at(userDTO.getCreate_at());
        return userEntity;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public LocalDateTime getCreate_at() {
        return create_at;
    }

    public void setCreate_at(LocalDateTime create_at) {
        this.create_at = create_at;
    }
}
