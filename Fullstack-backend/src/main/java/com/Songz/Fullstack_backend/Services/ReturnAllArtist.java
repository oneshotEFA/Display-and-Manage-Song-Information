package com.Songz.Fullstack_backend.Services;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Songz.Fullstack_backend.Repositories.ArtistTableRepo;
import com.Songz.Fullstack_backend.Tables.ArtistTable;

@Service
public class ReturnAllArtist implements  Common<Void,List<ArtistTable>> {
    private final ArtistTableRepo artistRepo;

    public ReturnAllArtist(ArtistTableRepo artistRepo) {
        this.artistRepo = artistRepo;
    }

    @Override
    public ResponseEntity<List<ArtistTable>> exe(Void input) {
        List<ArtistTable> artists = artistRepo.findAll();
        if (!artists.isEmpty()) {
            return ResponseEntity.ok().body(artists);
        }
        return null;
    }
}
