package com.Songz.Fullstack_backend.Repositories;

import com.Songz.Fullstack_backend.Tables.AlbumTable;
import com.Songz.Fullstack_backend.Tables.ArtistTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface AlbumTableRepo extends JpaRepository<AlbumTable, Integer> {

    public AlbumTable findByalbumtitile(String name);
}
