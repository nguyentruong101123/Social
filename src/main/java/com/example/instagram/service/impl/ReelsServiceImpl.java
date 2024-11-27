package com.example.instagram.service.impl;

import com.example.instagram.model.Reels;
import com.example.instagram.model.User;
import com.example.instagram.repository.ReelsRepository;
import com.example.instagram.service.ReelsService;
import com.example.instagram.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReelsServiceImpl implements ReelsService {
    @Autowired
    private ReelsRepository reelsRepository;

    @Autowired
    private UserService userService;

    @Override
    public Reels createReel(Reels reel, User user) {

        Reels newReel = new Reels();
        newReel.setUser(user);
        newReel.setTitle(reel.getTitle());
        newReel.setVideo(reel.getVideo());
        return reelsRepository.save(newReel);
    }

    @Override
    public List<Reels> findAllReels() {
        return reelsRepository.findAll();
    }

    @Override
    public List<Reels> findUsersReel(Integer userId) throws Exception {
        userService.findUserById(userId);
        return reelsRepository.findByUserId(userId);
    }
}
