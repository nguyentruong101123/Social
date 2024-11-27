package com.example.instagram.service;

import com.example.instagram.model.Chat;
import com.example.instagram.model.User;

import java.util.List;

public interface ChatService {
    Chat create(User reqUser, User user2);

    Chat findChatById(Integer chatId) throws Exception;

    List<Chat> findUsersChats(Integer userId);


}
