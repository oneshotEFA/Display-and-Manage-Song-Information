package com.Songz.Fullstack_backend.Services;


import com.Songz.Fullstack_backend.Repositories.AlbumRepo;
import com.Songz.Fullstack_backend.Tables.Album;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReturnAllAlbums implements Common<Void, List<Album>>{

    private final AlbumRepo albumRepo;
    public ReturnAllAlbums(AlbumRepo albumRepo) {
        this.albumRepo = albumRepo;
    }

    @Override
    public ResponseEntity<List<Album>> exe(Void input) {
        List<Album> musicList = albumRepo.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(musicList);

    }
}
