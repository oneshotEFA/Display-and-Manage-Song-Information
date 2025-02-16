package com.Songz.Fullstack_backend.Services;

import com.Songz.Fullstack_backend.Repositories.ArtistRepo;
import com.Songz.Fullstack_backend.Tables.Artist;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReturnAllArtist implements  Common<Void,List<Artist>> {
    private final ArtistRepo artistRepo;

    public ReturnAllArtist(ArtistRepo artistRepo) {
        this.artistRepo = artistRepo;
    }

    @Override
    public ResponseEntity<List<Artist>> exe(Void input) {
        List<Artist> artists = artistRepo.findAll();
        if (!artists.isEmpty()) {
            return ResponseEntity.ok().body(artists);
        }
        return null;
    }
}
