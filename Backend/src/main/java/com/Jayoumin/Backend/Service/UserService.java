package com.Jayoumin.Backend.Service;

import com.Jayoumin.Backend.DTO.UserDTO;
import com.Jayoumin.Backend.Entity.UserEntity;
import com.Jayoumin.Backend.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;

@Service    // 스프링 빈
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void signUp(UserDTO userDTO){
        UserEntity userEntity =
                UserEntity.toUserEntity(userDTO);
        userRepository.save(userEntity);
    }
}
