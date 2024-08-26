package com.Jayoumin.Backend.Contorller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OauthController {
    @GetMapping("/sign")
    public String signUp(){
        return "sign";
    }
}
