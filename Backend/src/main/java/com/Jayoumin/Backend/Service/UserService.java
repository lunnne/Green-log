package com.Jayoumin.Backend.Service;
import com.Jayoumin.Backend.DTO.AddUserRequest;
import com.Jayoumin.Backend.Domain.User;
import com.Jayoumin.Backend.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.Date;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public Long save(AddUserRequest dto){
        return userRepository.save(User.builder()
                .email(dto.getEmail())
                .password(dto.getPassword())
                .nickname(dto.getNickname())
                .create_at(dto.getCreate_at())
                .build()
        ).getId();
    }
}
