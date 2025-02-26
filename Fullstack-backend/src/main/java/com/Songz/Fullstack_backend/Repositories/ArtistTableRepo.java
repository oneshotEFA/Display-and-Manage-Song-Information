package com.Songz.Fullstack_backend.Repositories;

import com.Songz.Fullstack_backend.Tables.ArtistTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtistTableRepo extends JpaRepository<ArtistTable, Integer> {
    public ArtistTable findByartistname(String name);
}
