package com.Jayoumin.Backend.Controller;

import com.Jayoumin.Backend.DTO.AddUserRequest;
import com.Jayoumin.Backend.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@RequiredArgsConstructor
public class UserApiController {
    private final UserService userService;

    @PostMapping("/api/auth/signup")
    public String signup(@RequestBody AddUserRequest request){
        System.out.println("Received password: "+ request.getPassword());
        userService.save(request);
        return "redirect:/";
    }
}
