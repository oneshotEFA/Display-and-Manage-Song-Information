package com.Songz.Fullstack_backend.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.Songz.Fullstack_backend.Tables.Music;

@Repository
public interface MusicRepo extends JpaRepository<Music, Integer> {
    @Query( value = "call ListSongsInArtis(:artistname)",nativeQuery = true)
    public List<Music> getMusicByArtist(String artistname);
    
    @Query( value= "call search(:musictitle)", nativeQuery=true)
    public List<Music> Search(String musictitle);
}
