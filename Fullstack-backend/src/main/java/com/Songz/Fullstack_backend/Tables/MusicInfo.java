package com.Songz.Fullstack_backend.Tables;

public class MusicInfo {
    private String name;
    private String title;
    private String albumname;
    private String genre;
    // Constructors
    public MusicInfo() {}

    public MusicInfo(String name, String title, String albumname, String genre) {
        this.name = name;
        this.title = title;
        this.albumname = albumname;
        this.genre = genre;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAlbumname() {
        return albumname;
    }

    public void setAlbumname(String albumname) {
        this.albumname = albumname;
    }

    @Override
    public String toString() {
        return "Music{" +
                "name='" + name + '\'' +
                ", title='" + title + '\'' +
                ", albumname='" + albumname + '\'' +
                '}';
    }
}
