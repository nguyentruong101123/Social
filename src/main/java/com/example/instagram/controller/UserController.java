package com.example.instagram.controller;

import com.example.instagram.model.User;
import com.example.instagram.repository.UserRepository;
import com.example.instagram.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;


    @GetMapping("/api/users")
    public List<User> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return users;
    }

    @GetMapping("/api/users/{userId}")
    public User getUser(@PathVariable("userId") Integer userId) throws Exception {
        User user = userService.findUserById(userId);
        return user;
    }

    @PostMapping("/api/users")
    public User createUser(@RequestBody User user) {
        User newUser = userService.registerUser(user);
        return newUser;
    }

    @PutMapping("/api/users")
    public User updateUser(@RequestHeader("Authorization") String jwt, @RequestBody User user) throws Exception {
        User reqUser = userService.findUserByJwt(jwt);
        User updatedUser = userService.updateUser(user, reqUser.getId());
        return updatedUser;
    }

    @PutMapping("/api/users/follow/{user1}/{user2}")
    public User followUserHandler(@RequestHeader("Authorization") String jwt, @PathVariable Integer user2) throws Exception {
        User reqUser = userService.findUserByJwt(jwt);
        User user = userService.followUser(reqUser.getId(), user2);
        return user;
    }

    @GetMapping("/api/users/search")
    public List<User> searchUser(@RequestParam("query") String query) {
        List<User> users = userService.searchUser(query);
        return users;
    }


    @DeleteMapping("/api/users/{userId}")
    public String deleteUser(@PathVariable("userId") Integer userId) {
        userRepository.deleteById(userId);
        return "Successfully deleted user"+userId;
    }

    @GetMapping("/api/users/profile")
    public User getUserFromToken(@RequestHeader("Authorization") String jwt){
       User user = userService.findUserByJwt(jwt);
       user.setPassword(null);
        return user;
    }
}
