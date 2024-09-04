package com.Jayoumin.Backend.DTO;

import com.Jayoumin.Backend.Entity.UserEntity;

import java.time.LocalDateTime;
import java.time.ZoneId;

public class UserDTO {
    private String user_id;
    private String password;
    private String email;
    private String nickname;
    private LocalDateTime create_at;

    public static UserDTO toUserDTO(UserEntity userEntity){
        UserDTO userDTO = new UserDTO();
        userDTO.setUser_id(userEntity.getUser_id());
        userDTO.setPassword(userEntity.getPassword());
        userDTO.setEmail(userEntity.getNickname());
        userDTO.setNickname(userEntity.getNickname());
        userDTO.setCreate_at(userEntity.getCreate_at());

        return userDTO;
    }

    public UserDTO(){}

    public UserDTO(String user_id, String password, String email, String nickname, LocalDateTime create_at) {
        this.user_id = user_id;
        this.password = password;
        this.email = email;
        this.nickname = nickname;
        this.create_at = create_at;
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

    @Override
    public String toString() {
        return "UserDTO{" +
                "user_id='" + user_id + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", nickname='" + nickname + '\'' +
                ", create_at=" + create_at +
                '}';
    }

}
