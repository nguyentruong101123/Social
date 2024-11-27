package com.example.instagram.service;

import com.example.instagram.model.Reels;
import com.example.instagram.model.User;

import java.util.List;

public interface ReelsService {

    Reels createReel(Reels reel, User user);

    List<Reels> findAllReels();

    List<Reels> findUsersReel(Integer userId) throws Exception;

}
