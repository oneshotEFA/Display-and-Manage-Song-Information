package com.Songz.Fullstack_backend.Repositories;

import com.Songz.Fullstack_backend.Tables.Album;
import com.Songz.Fullstack_backend.Tables.Music;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlbumRepo extends JpaRepository<Album, Integer> {
    @Query(value = "CALL ListSongs(:album_name)", nativeQuery = true)
    List<Music> findMusicByAlbum(String album_name);

}
