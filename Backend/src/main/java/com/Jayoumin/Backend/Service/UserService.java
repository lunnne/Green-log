package com.Jayoumin.Backend.Service;
import com.Jayoumin.Backend.DTO.AddUserRequest;
import com.Jayoumin.Backend.Domain.User;
import com.Jayoumin.Backend.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public String save(AddUserRequest dto){
        return userRepository.save(User.builder()
                .email(dto.getEmail())
                .password(bCryptPasswordEncoder.encode(dto.getPassword()))
                .nickname(dto.getNickname())
                .create_at(dto.getCreate_at())
                .build()
        ).getId();
    }

    public User findByNickname(AddUserRequest dto){
        Optional<User> userOpt = userRepository.findByNickname(dto.getNickname());
        return userOpt.orElseThrow(()-> new UsernameNotFoundException("사용자를 찾을 수 없습니다."));
    }
}
