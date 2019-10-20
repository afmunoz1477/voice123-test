import { Component, OnInit } from '@angular/core';
import { VoiceSearchService } from '../../services/voice.search.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.css']
})
export class ActorsListComponent implements OnInit {
  list: Config = [];
  pages: string[] = [];
  resultsLength = 0;
  totalPages = 0;
  currentPage = 1;
  key = '';
  actors = false;
  isLoadingResults = true;
  isRateLimitReached = false;
  constructor( private voiceServices: VoiceSearchService ) {
    this.voiceServices.getSearchProviders(null, this.currentPage).subscribe((data) => {
      this.setAttributePage(data);
    });
  }

  ngOnInit() {
  }

  searchByKeys(keywords) {
    if (keywords && keywords !== '') {
      this.key = keywords;
      this.voiceServices.getSearchProviders(keywords, this.currentPage)
      .subscribe((data: any) => {
        this.setAttributePage(data);
      });
    } else {
      this.key = '';
    }
  }

  changePage(newValue) {
    if (newValue === 1 || newValue === -1) {
      newValue = Number(this.currentPage) + Number(newValue);
    }
    this.currentPage = newValue;
    this.voiceServices.getSearchProviders(this.key, this.currentPage)
    .subscribe((data: any) => {
      this.setAttributePage(data);
    });
  }

  setAttributePage(data) {
    const keys = data.headers.keys();
    const headers = { };
    keys.map(key => headers[key] = data.headers.get(key));
    const current = Number(headers['x-list-current-page']);
    const pageSize = Number(headers['x-list-page-size']);
    this.pages = [];
    for (let i = current; i < (pageSize + current); i++) {
      this.pages.push(String(i));
    }
    this.list = data.body.providers;
    this.totalPages = headers['x-list-total-pages'];
    this.resultsLength = data.body.providers.length;
    this.isLoadingResults = false;
    this.actors = true;
  }


}
