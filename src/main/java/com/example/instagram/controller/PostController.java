package com.example.instagram.controller;

import com.example.instagram.model.Post;
import com.example.instagram.model.User;
import com.example.instagram.response.ApiResponse;
import com.example.instagram.service.PostService;
import com.example.instagram.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    UserService userService;

    @PostMapping("api/posts")
    public ResponseEntity<Post> createPost(@RequestHeader("Authorization") String jwt,
             @RequestBody Post post) throws Exception{

        User reqUser = userService.findUserByJwt(jwt);
        Post createPost = postService.createNewPost(post, reqUser.getId());

        return new ResponseEntity<>(createPost, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/posts/{postId}/user/{userId}")
    public ResponseEntity<ApiResponse> deletePost(@PathVariable Integer postId,
                                                  @RequestHeader("Authorization") String jwt) throws Exception{
        User reqUser = userService.findUserByJwt(jwt);
        String message = postService.deletePost(postId, reqUser.getId());
        ApiResponse res = new ApiResponse(message, true);
        return new ResponseEntity<ApiResponse>(res, HttpStatus.OK);

    }

    @GetMapping("/posts/{postId}")
    public ResponseEntity<Post> findPostIdHandle(@PathVariable Integer postId) throws Exception{
        Post post = postService.findPostById(postId);

        return new ResponseEntity<Post>(post,HttpStatus.ACCEPTED);

    }

    @GetMapping("/posts/user/{userId}")
    public ResponseEntity<List<Post>> findUserPost(@PathVariable Integer userId){
        List<Post> posts = postService.findPostByUserId(userId);
        return new ResponseEntity<List<Post>>(posts,HttpStatus.OK);

    }

    @GetMapping("/posts")
    public ResponseEntity<List<Post>> findAllPost(){
        List<Post> posts = postService.findAllPost();
        return new ResponseEntity<List<Post>>(posts,HttpStatus.OK);

    }

    @PutMapping("/posts/save/{postId}")
    public ResponseEntity<Post> savedPostHandle(@PathVariable Integer postId,
                                                @RequestHeader("Authorization") String jwt) throws Exception{
        User reqUser = userService.findUserByJwt(jwt);
        Post post = postService.savedPost(postId, reqUser.getId());

        return new ResponseEntity<>(post, HttpStatus.ACCEPTED);
    }

    @PutMapping("/posts/like/{postId}")
    public ResponseEntity<Post> PostHandle(@PathVariable Integer postId,
                                           @RequestHeader("Authorization") String jwt) throws Exception{
        User reqUser = userService.findUserByJwt(jwt);
        Post post = postService.likePost(postId, reqUser.getId());

        return new ResponseEntity<Post>(post, HttpStatus.ACCEPTED);
    }
}
