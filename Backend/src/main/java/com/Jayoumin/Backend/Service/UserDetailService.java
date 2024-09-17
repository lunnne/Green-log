package com.Jayoumin.Backend.Service;

import com.Jayoumin.Backend.Domain.User;
import com.Jayoumin.Backend.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public User loadUserByUsername(String nickname) {
        return userRepository.findByNickname(nickname)
                .orElseThrow(()-> new IllegalArgumentException("NOT FOUND Username: "+nickname));
    }
}
