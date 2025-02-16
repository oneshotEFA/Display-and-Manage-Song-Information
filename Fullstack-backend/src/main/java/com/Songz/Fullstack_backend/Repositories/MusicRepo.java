package com.Songz.Fullstack_backend.Repositories;

import com.Songz.Fullstack_backend.Tables.Music;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MusicRepo extends JpaRepository<Music, Integer> {

}
