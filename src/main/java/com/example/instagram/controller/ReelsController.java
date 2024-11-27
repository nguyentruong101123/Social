package com.example.instagram.controller;

import com.example.instagram.model.Reels;
import com.example.instagram.model.User;
import com.example.instagram.service.ReelsService;
import com.example.instagram.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReelsController {

    @Autowired
    private ReelsService reelsService;

    @Autowired
    private UserService userService;

    @PostMapping("/api/reels")
    public Reels createReels(@RequestBody Reels reels,
                             @RequestHeader("Authorization") String jwt) {
        User repUser = userService.findUserByJwt(jwt);

        Reels creReels = reelsService.createReel(reels, repUser);
        return creReels;


    }

    @GetMapping("/api/reels")
    public List<Reels> findAllReels() {
        List<Reels> reels = reelsService.findAllReels();

        return reels;
    }

    @GetMapping("/api/reels/user/{userId}")
    public List<Reels> findUserReels(@PathVariable Integer userId) throws Exception {
        List<Reels> reels = reelsService.findUsersReel(userId);

        return reels;
    }

}
