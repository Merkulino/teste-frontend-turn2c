import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, tap } from 'rxjs';
import { Dog, DogResponse } from '../models/Dog';

@Injectable({
  providedIn: 'root'
})
export class DogsAPIService {

  private URL: string = "https://api.thedogapi.com/v1";
  private auth_token: string = "live_zLWMrt8EIQZypISZ1yI0ng9KW3psxKyFRuKQpvq8O3MYYzwqdWoJ2WGG99HAunG5";

  constructor(private httpClient: HttpClient) { }

  private getHttpHeaders() {
    const headers = new HttpHeaders({
      'x-api-key': this.auth_token
    });

    return { headers: headers };
  }

  public getDogs(page: string = "0"): Observable<DogResponse[]> {
    return this.httpClient
      .get<DogResponse[]>(
        `${this.URL}/images/search?limit=8&has_breeds=2&page=${page}`,
        this.getHttpHeaders());
  }


  public getDogsBreeds(): Observable<DogResponse> {
    return this.httpClient
      .get<DogResponse>(
        'https://api.thedogapi.com/v1/breeds?limit=10',
        this.getHttpHeaders());
  }

  public getDogsByHisBreed(breedId: string, page: string = "0"): Observable<DogResponse> {
    return this.httpClient
      .get<DogResponse>(
        `${this.URL}/images/search?limit=8&has_breeds=${breedId}&page=${page}`,
        this.getHttpHeaders());
  }

  public getDogsFromUser(page: string = "0"): Observable<DogResponse> {
    return this.httpClient
      .get<DogResponse>(
        `${this.URL}/images/?limit=10&page=${page}`,
        this.getHttpHeaders());
  }
}
