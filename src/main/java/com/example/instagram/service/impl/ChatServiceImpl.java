package com.example.instagram.service.impl;

import com.example.instagram.model.Chat;
import com.example.instagram.model.User;
import com.example.instagram.repository.ChatRepository;
import com.example.instagram.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ChatServiceImpl implements ChatService {

    @Autowired
    private ChatRepository chatRepository;

    @Override
    public Chat create(User reqUser, User user2) {
        Chat isExist = chatRepository.findChatByUsersId(user2, reqUser);
        if(isExist != null){
            return isExist;
        }
        Chat chat = new Chat();
        chat.getUsers().add(user2);
        chat.getUsers().add(reqUser);
        chat.setTimestamp(LocalDateTime.now());


        return chatRepository.save(chat);
    }

    @Override
    public Chat findChatById(Integer chatId) throws Exception {
        Optional<Chat> chat = chatRepository.findById(chatId);
        if(chat.isEmpty()){
            throw new Exception("chat not found with id + "+ chatId);
        }
        return chat.get();
    }

    @Override
    public List<Chat> findUsersChats(Integer userId) {
        return chatRepository.findByUsersId(userId);
    }
}
