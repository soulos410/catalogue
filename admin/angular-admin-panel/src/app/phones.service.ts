import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  uri = 'http://localhost:4000/phones';
  versionuri = 'http://localhost:4000//getversion';
  
  constructor(private http: HttpClient) { }

  addPhones(title, brand, date, os, uri) {
    const obj = {
      title: title,
      brand: brand,
      date: date,
      os: os,
      uri: uri
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getPhones() {
    return this
           .http
           .get(`${this.uri}`);
  }

  getVersion() {
    return this
           .http
           .get(`${this.versionuri}`);
  }

  editPhones(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updatePhones(title, brand, date, os, uri, id) {

    const obj = {
        title: title,
        brand: brand,
        date: date,
        os: os,
        uri: uri
      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

 deletePhones(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
