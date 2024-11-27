package com.example.instagram.controller;

import com.example.instagram.model.Chat;
import com.example.instagram.model.User;
import com.example.instagram.request.CreateChatRequest;
import com.example.instagram.service.ChatService;
import com.example.instagram.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ChatController {
    @Autowired
    private ChatService chatService;

    @Autowired
    private UserService userService;

    @PostMapping("/api/chats")
    public Chat createChat(@RequestHeader("Authorization") String jwt,
                           @RequestBody CreateChatRequest req) throws Exception {
        User reqUser = userService.findUserByJwt(jwt);
        User user2 = userService.findUserById(req.getUserId());

        Chat chat = chatService.create(reqUser, user2);
        return chat;
    }

    @GetMapping("/api/chats")
    public List<Chat> findUserChat(@RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwt(jwt);

        List<Chat> chat = chatService.findUsersChats(user.getId());

        return chat;
    }

}
