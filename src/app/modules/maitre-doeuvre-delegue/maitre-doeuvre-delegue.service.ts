import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMaitreDoeuvreDelegue } from './maitre-doeuvre-delegue';

const headers = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'})
};



@Injectable({
  providedIn: 'root'
})
export class MaitreDoeuvreDelegueService {

  env = environment;
  public resourceUrl = this.env.baseUrl + 'maitre-doeuvrage-delegue';

  constructor(protected http: HttpClient) {
  }

  create(region: any) {
    return this.http.post(this.resourceUrl, region, headers);
  }

  update(region: IMaitreDoeuvreDelegue) {
    return this.http.put(this.resourceUrl, region, headers);
  }

  find(id: string) {
    return this.http.get(`${this.resourceUrl}` + '/show/' + id, headers);
  }

  fetch(page: number) {
    return this.http.get(this.resourceUrl + '?page=' + page, headers);
  }

  fetchNoPagination() {
    return this.http.get(this.resourceUrl + '/no-pagination', headers);
  }

  delete(id: string) {
    return this.http.delete(`${this.resourceUrl}/${id}`, headers);
  }
}
