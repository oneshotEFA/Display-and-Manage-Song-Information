package com.Songz.Fullstack_backend.Services;
import com.Songz.Fullstack_backend.Repositories.MusicRepo;
import com.Songz.Fullstack_backend.Tables.Music;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class ReturnAllSongs implements Common<Void, List<Music>>{
    private final MusicRepo musicRepo;

    public ReturnAllSongs(MusicRepo musicRepo) {
        this.musicRepo = musicRepo;
    }

    @Override
    public ResponseEntity<List<Music>> exe(Void input) {
        List<Music> musicList = musicRepo.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(musicList);
    }
}
