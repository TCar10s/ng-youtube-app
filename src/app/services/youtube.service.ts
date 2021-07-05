import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { YouTubeResponse, Video } from '../interfaces/youtube.interface';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private youtubeUrl: string;
  private apiKey: string;
  private playlistId: string;
  private nextPageToken: string;

  constructor(private http: HttpClient) {
    this.youtubeUrl = 'https://www.googleapis.com/youtube/v3/';
    this.apiKey = '';
    this.playlistId = '';
    this.nextPageToken = '';
  }

  getVideos = (): Observable<Video[]> => {
    const url = `${this.youtubeUrl}playlistItems`;
    
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playlistId)
      .set('key', this.apiKey)
      .set('pageToken', this.nextPageToken)

    return this.http.get<YouTubeResponse>(url, { params }).pipe(

      map((resp) => {
        this.nextPageToken = resp.nextPageToken;
        return resp.items;
      }),

      map((items) => items.map((item) => item.snippet))
    );
  };
}
