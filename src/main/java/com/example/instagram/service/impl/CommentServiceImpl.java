package com.example.instagram.service.impl;

import com.example.instagram.model.Comment;
import com.example.instagram.model.Post;
import com.example.instagram.model.User;
import com.example.instagram.repository.CommentRepository;
import com.example.instagram.repository.PostRepository;
import com.example.instagram.service.CommentService;
import com.example.instagram.service.PostService;
import com.example.instagram.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;
    @Autowired
    private PostRepository postRepository;

    @Override
    public Comment createComment(Comment comment, Integer postId, Integer userId) throws Exception {
        User user = userService.findUserById(userId);
        if (user == null) {
            throw new Exception("User not found with ID: " + userId);
        }

        Post post = postService.findPostById(postId);
        if (post == null) {
            throw new Exception("Post not found with ID: " + postId);
        }

        comment.setUser(user);
        comment.setPost(post);
        comment.setContent(comment.getContent());
        comment.setImage(comment.getImage());
        comment.setCreatedAt(LocalDateTime.now());

        Comment savedComment = commentRepository.save(comment);

        if (post.getComments() == null) {
            post.setComments(new ArrayList<>());
        }
        post.getComments().add(savedComment);

        postRepository.save(post);

        return savedComment;
    }

    @Override
    public Comment findCommentById(Integer commentId) throws Exception {
        Optional<Comment> comment = commentRepository.findById(commentId);
        if(comment.isEmpty()){
            throw new Exception("comment not exist");
        }
        return comment.get();
    }

    @Override
    public Comment likeComment(Integer commentId, Integer userId) throws Exception {
        Comment comment = findCommentById(commentId);
        User user = userService.findUserById(userId);
        if(!comment.getLiked().contains(user)){
            comment.getLiked().add(user);
        }
        else comment.getLiked().remove(user);

        return commentRepository.save(comment);
    }
}
