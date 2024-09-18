package com.Jayoumin.Backend.Controller;

import com.Jayoumin.Backend.DTO.AddUserRequest;
import com.Jayoumin.Backend.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@RequiredArgsConstructor
public class UserApiController {
    private final UserService userService;

    @PostMapping("/api/auth/signup")
    public String signup(@RequestBody AddUserRequest request){
        userService.save(request);
        return "redirect:/";
    }


    @PostMapping("/api/auth/login")
    public ResponseEntity<String> login(@RequestBody AddUserRequest request){
        try{
            userService.findByNickname(request);
            return ResponseEntity.ok("로그인 성공");
        }catch (UsernameNotFoundException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(e.getMessage());
        }
        // return "redirect:/index.html";
    }
}
