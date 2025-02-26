package com.Songz.Fullstack_backend.Controller;

import com.Songz.Fullstack_backend.Services.*;
import com.Songz.Fullstack_backend.Tables.Album;
import com.Songz.Fullstack_backend.Tables.Artist;
import com.Songz.Fullstack_backend.Tables.Music;
import com.Songz.Fullstack_backend.Tables.MusicInfo;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("/music")
@CrossOrigin(origins = "http://localhost:5173")
public class SongController {

    private final ReturnAllAlbums returnAllAlbums;
    private final ReturnAllArtist returnAllArtist;
    private final ReturnAllSongs returnAllSongs;
    private final ReturnByAlbum  returnByAlbum;
    private final AddMusic addMusic;
    public SongController(ReturnAllAlbums returnAllAlbums, ReturnAllArtist returnAllArtist, ReturnAllSongs returnAllSongs, ReturnByAlbum returnByAlbum, AddMusic addMusic) {
        this.returnAllAlbums = returnAllAlbums;
        this.returnAllArtist = returnAllArtist;
        this.returnAllSongs = returnAllSongs;
        this.returnByAlbum = returnByAlbum;
        this.addMusic = addMusic;
    }

    @GetMapping("/album")
    public ResponseEntity<List<Album>> getAllAlbums() {
        return returnAllAlbums.exe(null);
    }
    @GetMapping("/artist")
    public ResponseEntity<List<Artist>> getAllArtists() {
        return returnAllArtist.exe(null);
    }
    @GetMapping("/Song")
    public ResponseEntity<List<Music>> getAllSongs() {
        return returnAllSongs.exe(null);
    }
    @GetMapping("/find")
    public ResponseEntity<List<Music>> getByAlbumName(@RequestParam String albumName) {
        return returnByAlbum.exe(albumName);
    }
    @PostMapping("/add")
    public ResponseEntity<String> addMusic(@RequestBody MusicInfo music) {
        return addMusic.exe(music);
    }

}
