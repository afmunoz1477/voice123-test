import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class VoiceSearchService {
  host = environment.HOST;
  service = environment.VOICE_SERVICE;
  constructor(private http: HttpClient) { }

  getSearchProviders(keywords, page): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(`${this.host}${this.getUri(keywords, page)}`, { observe: 'response' });
  }

  getUri(keywords, page) {
    if (keywords && keywords !== '' && page) {
      return `?service=${this.service}&keywords=${keywords}&page=${page}`;
    } else if (keywords && keywords !== '' && !page) {
      return `?service=${this.service}&keywords=${keywords}`;
    } else {
      return `?service=${this.service}&page=${page}`;
    }
  }
}
