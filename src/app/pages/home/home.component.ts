import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../interfaces/youtube.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videos: Video[];

  constructor(private _ys: YoutubeService) {
    this.videos = [];
  }

  ngOnInit(): void {
   this.getVideos();
  }

  getVideos = () => {
    this._ys.getVideos().subscribe((resp) => {
      this.videos.push(...resp);
      console.log(this.videos);
    });
  }

  showVideo = (video: Video) => {
    Swal.fire({
      html: `
      <h6>${video.title}</h6>
      <hr>
      <iframe 
        width="100%" 
        height="315" 
        src="https://www.youtube.com/embed/${video.resourceId.videoId}" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture" 
        allowfullscreen>
      </iframe>`,
    });
  };
}
