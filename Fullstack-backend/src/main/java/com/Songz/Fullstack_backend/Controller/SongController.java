package com.Songz.Fullstack_backend.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Songz.Fullstack_backend.Services.AddMusic;
import com.Songz.Fullstack_backend.Services.ReturnAllAlbums;
import com.Songz.Fullstack_backend.Services.ReturnAllArtist;
import com.Songz.Fullstack_backend.Services.ReturnAllSongs;
import com.Songz.Fullstack_backend.Services.ReturnByAlbum;
import com.Songz.Fullstack_backend.Tables.Album;
import com.Songz.Fullstack_backend.Tables.ArtistTable;
import com.Songz.Fullstack_backend.Tables.Music;
import com.Songz.Fullstack_backend.Tables.MusicInfo;

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
    public ResponseEntity<List<ArtistTable>> getAllArtists() {
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
