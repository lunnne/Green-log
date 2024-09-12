package com.Jayoumin.Backend.Controller;

import com.Jayoumin.Backend.DTO.AddUserRequest;
import com.Jayoumin.Backend.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor
public class UserApiController {
    private final UserService userService;

    @PostMapping("/signup")
    public String signup(AddUserRequest request){
        userService.save(request);
        return "redirect:/login";
    }
}
