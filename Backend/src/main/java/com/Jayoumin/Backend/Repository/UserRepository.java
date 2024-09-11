package com.Jayoumin.Backend.Repository;

import com.Jayoumin.Backend.Domain.User;
import com.Jayoumin.Backend.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository // 첫번쨰 인자: 어떤 entity?, 두 번째: pk 타입
public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
}
