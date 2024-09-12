package com.Jayoumin.Backend.DTO;

import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Getter
@Setter
public class AddUserRequest {
    private String email;
    private String password;
    private String nickname;
    private LocalDateTime create_at;
}
