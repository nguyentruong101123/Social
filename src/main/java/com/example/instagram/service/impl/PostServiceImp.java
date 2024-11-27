package com.example.instagram.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import com.example.instagram.model.Post;
import com.example.instagram.model.User;
import com.example.instagram.repository.PostRepository;
import com.example.instagram.repository.UserRepository;
import com.example.instagram.service.PostService;
import com.example.instagram.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

;

@Service
public class PostServiceImp implements PostService {
	
	@Autowired
	private PostRepository postRepository;
	
	@Autowired
	private UserService userService;

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public Post createNewPost(Post post, Integer userId) throws Exception {
		
		User user = userService.findUserById(userId);
		Post newPost = new Post();
		 if (user == null) {
	            throw new Exception("User not found with ID: " + userId);
	      }
		newPost.setCaption(post.getCaption());
		newPost.setImage(post.getImage());
		newPost.setCreatedAt(LocalDateTime.now());
		newPost.setVideo(post.getVideo());
		newPost.setUser(user);
		
		return postRepository.save(newPost);
	}

	@Override
	public String deletePost(Integer portId, Integer userId) throws Exception {
		Post post = findPostById(userId);
		User user = userService.findUserById(userId);
		if(post.getUser().getId()!=user.getId()) {
			throw new Exception("you can't delete another users post");
		}
		postRepository.delete(post);
		return "post deleted successfully";
	}

	@Override
	public List<Post> findPostByUserId(Integer userId) {

		return postRepository.findPostByUserId(userId);
	}

	@Override
	public Post findPostById(Integer postId) throws Exception {
		Optional<Post> opt = postRepository.findById(postId);
		if(opt.isEmpty()) {
			throw new Exception("post not found with id " + postId);
		}
		return opt.get();
	}

	@Override
	public List<Post> findAllPost() {
		return postRepository.findAll();
	}

	@Override
	public Post savedPost(Integer postId, Integer userId) throws Exception {
		Post post = findPostById(postId);
		User user = userService.findUserById(userId);
		
		if (user.getSavedPosts().contains(post)) {
			user.getSavedPosts().remove(post);
		}
		else {
			user.getSavedPosts().add(post);
		}
		userRepository.save(user);
		return post;
	}

	@Override
	public Post likePost(Integer postId, Integer userId) throws Exception {
		Post post = findPostById(postId);
		User user = userService.findUserById(userId);


		if(post.getLiked().contains(user)) {
			post.getLiked().remove(user);
		}
		else {
			post.getLiked().add(user);
		}
		return postRepository.save(post);
		
	}

}
