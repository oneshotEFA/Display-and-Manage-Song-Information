package com.Songz.Fullstack_backend.Services;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Songz.Fullstack_backend.Repositories.MusicRepo;
import com.Songz.Fullstack_backend.Tables.Music;
import com.Songz.Fullstack_backend.Tables.MusicInfo;
@Service
public class ReturnByArtist implements Common<String, List<Music>> {
    private final MusicRepo musicRepo;

    public ReturnByArtist(MusicRepo musicRepo) {
        this.musicRepo = musicRepo;
    }
    @Override
    public ResponseEntity<List<Music>> exe(String input) {
        List<Music> artistMusic = musicRepo.getMusicByArtist(input);
        if(!artistMusic.isEmpty()){
            return ResponseEntity.ok().body(artistMusic);
        }
       return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
    
    
}
