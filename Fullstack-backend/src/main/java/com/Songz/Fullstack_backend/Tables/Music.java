package com.Songz.Fullstack_backend.Tables;

import jakarta.persistence.*;

@Entity
@Table(name = "allmusic")
public class Music {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int MusicId;
    @Column(name = "name")
    private String ArtistName;
    @Column(name = "title")
    private String MusicTitle;
    @Column(name = "albumname")
    private String AlbumName;

    public int getMusicId() {
        return MusicId;
    }

    public void setMusicId(int musicId) {
        MusicId = musicId;
    }

    public String getArtistName() {
        return ArtistName;
    }

    public void setArtistName(String artistName) {
        ArtistName = artistName;
    }

    public String getMusicTitle() {
        return MusicTitle;
    }

    public void setMusicTitle(String musicTitle) {
        MusicTitle = musicTitle;
    }

    public String getAlbumName() {
        return AlbumName;
    }

    public void setAlbumName(String albumName) {
        AlbumName = albumName;
    }
}
