package com.Songz.Fullstack_backend.Services;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Songz.Fullstack_backend.Repositories.MusicRepo;
import com.Songz.Fullstack_backend.Tables.Music;
@Service
public class SearchMusic implements Common<String, List<Music>> {
    private final MusicRepo musicRepo;

    public SearchMusic(MusicRepo musicRepo) {
        this.musicRepo = musicRepo;
    }
    @Override
    public ResponseEntity<List<Music>> exe(String input) {
        List<Music> searchedmusic = musicRepo.Search(input);
        try {
            if(!searchedmusic.isEmpty()){
                return ResponseEntity.ok().body(searchedmusic);
            } 
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return null;
    }
}

