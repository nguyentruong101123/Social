package com.example.instagram.repository;

import com.example.instagram.model.Reels;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReelsRepository extends JpaRepository<Reels, Long> {

    List<Reels> findByUserId(Integer userId);

}
