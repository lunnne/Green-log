package com.Jayoumin.Backend.Contorller;

import com.Jayoumin.Backend.DTO.UserDTO;
import com.Jayoumin.Backend.Service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user/signup")
    public String signUp(){
        return "signUp";
    }

    @PostMapping("/user/signup")
    public String sighUp(@ModelAttribute UserDTO userDTO){
        System.out.println("UserController.signUp");
        System.out.println("UserDTO = "+userDTO);
        userService.signUp(userDTO);
        return "sign";
    }

}
