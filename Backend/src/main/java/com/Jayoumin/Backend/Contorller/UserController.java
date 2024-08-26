package com.Jayoumin.Backend.Contorller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {
    @GetMapping("/user/signup")
    public String signUp(){
        return "signUp";
    }

    @PostMapping("/user/signup")
    public String sighUp(@RequestParam("user_id") String user_id,
                         @RequestParam("password") String password,
                         @RequestParam("email") String email,
                         @RequestParam("nickname") String nickname
                         ){
        System.out.println(user_id+" "+password+" "+email+" "+nickname);
        return "sign";
    }

}
