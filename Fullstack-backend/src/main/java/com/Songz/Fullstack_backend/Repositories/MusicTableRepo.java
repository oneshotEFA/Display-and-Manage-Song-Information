package com.Songz.Fullstack_backend.Repositories;

import com.Songz.Fullstack_backend.Tables.MusicTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MusicTableRepo extends JpaRepository<MusicTable, Integer> {
}
