package com.admin.scholarship.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
public class LoginController {

    @GetMapping("/")
    public String showLoginPage() {
        return "login"; 
    }

    @PostMapping("/loginPage")
    public String handleLogin(@RequestParam String email,
                              @RequestParam String password,
                              @RequestParam String user,
                              org.springframework.ui.Model model) {

        if (user.equals("admin")) {
            return "admin/dashboard";  // maps to templates/admin/dashboard.html
            
        } else if (user.equals("student")) {            
            return "student/home";     // maps to templates/student/home.html
        }
        else {
        	
        }

        return "redirect:/"; 
    }
}
