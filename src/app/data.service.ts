import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'https://dentalclouddev.s3.amazonaws.com/challenge/tarot.json';

  constructor(private httpClient: HttpClient) {}

  public fetchData() {
    return this.httpClient.get(this.url);
  }
}
