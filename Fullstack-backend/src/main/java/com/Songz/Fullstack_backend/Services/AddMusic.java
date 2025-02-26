package com.Songz.Fullstack_backend.Services;

import com.Songz.Fullstack_backend.Repositories.*;
import com.Songz.Fullstack_backend.Tables.*;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class AddMusic implements Common<MusicInfo,String> {
    private final MusicTableRepo musicTableRepo;
    private final AlbumTableRepo albumTableRepo;
    private final ArtistTableRepo artistTableRepo;

    public AddMusic(MusicTableRepo musicTableRepo, AlbumTableRepo albumTableRepo, ArtistTableRepo artistTableRepo) {
        this.musicTableRepo = musicTableRepo;
        this.albumTableRepo = albumTableRepo;
        this.artistTableRepo = artistTableRepo;
    }

    @Transactional
    @Override
    public ResponseEntity<String> exe(MusicInfo input) {
        Optional<ArtistTable> optionalArtist = Optional.ofNullable(artistTableRepo.findByartistname(input.getName()));
        ArtistTable artist = optionalArtist.orElseGet(() -> InsertArtist(input.getName()));
        Optional<AlbumTable> optionalAlbum = Optional.ofNullable(albumTableRepo.findByalbumtitile(input.getAlbumname()));
        AlbumTable album = optionalAlbum.orElseGet(() -> InsertAlbum(input.getAlbumname(), artist.getId()));
        MusicTable musicTable = new MusicTable();
        musicTable.setAlbumid(album.getAlbumid());
        musicTable.setArtistid(artist.getId());
        musicTable.setGenre(input.getGenre());
        musicTable.setMusictitile(input.getTitle());
        musicTableRepo.save(musicTable);
        return ResponseEntity.ok().body("success");
    }

    private ArtistTable InsertArtist(String name) {
        ArtistTable artist = new ArtistTable();
        artist.setArtistname(name);
        artistTableRepo.save(artist);
        return artist;
    }

    private AlbumTable InsertAlbum(String name, int artistid) {
        AlbumTable album = new AlbumTable();
        album.setArtistid(artistid);
        album.setAlbumtitile(name);
        albumTableRepo.save(album);
        return album;
    }
}
