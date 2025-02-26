package com.Songz.Fullstack_backend.Tables;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "music")
public class MusicTable {
    @Id
    @Column(name="musicid")
    private int musicid;
    @Column(name = "musictitle")
    private String musictitile;
    @Column(name = "genre")
    private String genre;
    @Column(name = "artistid")
    private int artistid;
    @Column(name = "albumid")
    private int albumid;

    public int getMusicid() {
        return musicid;
    }

    public void setMusicid(int musicid) {
        this.musicid = musicid;
    }

    public String getMusictitile() {
        return musictitile;
    }

    public void setMusictitile(String musictitile) {
        this.musictitile = musictitile;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public int getArtistid(int id) {
        return artistid;
    }

    public void setArtistid(int artistid) {
        this.artistid = artistid;
    }

    public int getAlbumid() {
        return albumid;
    }

    public void setAlbumid(int albumid) {
        this.albumid = albumid;
    }
}
