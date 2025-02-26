package com.Songz.Fullstack_backend.Tables;

import jakarta.persistence.*;

@Entity
@Table(name = "album")
public class AlbumTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "albumid")
    private int albumid;
    @Column(name = "albumtitle")
    private String albumtitile;
    @Column(name = "artistid")
    private int artistid;

    public int getAlbumid() {
        return albumid;
    }

    public void setAlbumid() {
        this.albumid = albumid;
    }

    public String getAlbumtitile() {
        return albumtitile;
    }

    public void setAlbumtitile(String albumtitile) {
        this.albumtitile = albumtitile;
    }

    public int getArtistid() {
        return artistid;
    }

    public void setArtistid(int artistid) {
        this.artistid = artistid;
    }
}
