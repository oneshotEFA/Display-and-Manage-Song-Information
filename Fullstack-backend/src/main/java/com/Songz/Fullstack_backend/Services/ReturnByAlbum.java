package com.Songz.Fullstack_backend.Services;

import com.Songz.Fullstack_backend.Repositories.AlbumRepo;
import com.Songz.Fullstack_backend.Tables.Music;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ReturnByAlbum implements Common<String,List<Music>>{

    private final AlbumRepo albumRepo;

    public ReturnByAlbum(AlbumRepo albumRepo) {
        this.albumRepo = albumRepo;
    }
    @Override

    public ResponseEntity<List<Music>> exe(String input) {
        List<Music> AlbumMusic = albumRepo.findMusicByAlbum(input);
        if(AlbumMusic != null){
            return ResponseEntity.ok().body(AlbumMusic);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
