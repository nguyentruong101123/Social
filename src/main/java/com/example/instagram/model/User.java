package com.example.instagram.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "firstname", nullable = false)
	private String firstName;

	@Column(name = "lastname", nullable = false)
	private String lastName;

	@Column(name = "email", nullable = false)
	private String email;

	@Column(name = "gender")
	private String gender;
	
	@Column(name = "passwords", nullable = false)
	private String password;
	
	@ElementCollection
	@CollectionTable(name = "user_followers", joinColumns = @JoinColumn(name = "user_id"))
	@Column(name = "follower_id")
	private List<Integer> followers = new ArrayList<>();

	@ElementCollection
	@CollectionTable(name = "user_followings", joinColumns = @JoinColumn(name = "user_id"))
	@Column(name = "following_id")
	private List<Integer> followings = new ArrayList<>();

	 @OneToMany
	 @JsonIgnore
	 @JoinTable(
	        name = "user_saved_posts",
	        joinColumns = @JoinColumn(name = "user_id"),
	        inverseJoinColumns = @JoinColumn(name = "post_id")
	    )
	 private List<Post> savedPosts = new ArrayList<>();


	 @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	 @JsonIgnore
	 private List<Post> post;

	 @JsonIgnore
	 @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	 private List<Comment> comments = new ArrayList<>();

	 @JsonIgnore
	 @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	 private List<Reels> reels;

	 @JsonIgnore
	 @ManyToMany(mappedBy = "users", fetch = FetchType.LAZY)
	 private List<Chat> chats = new ArrayList<>();
}
