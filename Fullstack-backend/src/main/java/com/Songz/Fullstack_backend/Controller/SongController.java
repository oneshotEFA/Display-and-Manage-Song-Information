package com.Songz.Fullstack_backend.Controller;

import com.Songz.Fullstack_backend.Services.ReturnAllArtist;
import com.Songz.Fullstack_backend.Services.ReturnAllAlbums;
import com.Songz.Fullstack_backend.Services.ReturnAllSongs;
import com.Songz.Fullstack_backend.Services.ReturnByAlbum;
import com.Songz.Fullstack_backend.Tables.Album;
import com.Songz.Fullstack_backend.Tables.Artist;
import com.Songz.Fullstack_backend.Tables.Music;
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
    public SongController(ReturnAllAlbums returnAllAlbums, ReturnAllArtist returnAllArtist, ReturnAllSongs returnAllSongs, ReturnByAlbum returnByAlbum) {
        this.returnAllAlbums = returnAllAlbums;
        this.returnAllArtist = returnAllArtist;
        this.returnAllSongs = returnAllSongs;
        this.returnByAlbum = returnByAlbum;
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
}
