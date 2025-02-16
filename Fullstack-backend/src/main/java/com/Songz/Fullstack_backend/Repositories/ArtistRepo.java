package com.Songz.Fullstack_backend.Repositories;

import com.Songz.Fullstack_backend.Tables.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtistRepo extends JpaRepository<Artist, Integer> {
}
