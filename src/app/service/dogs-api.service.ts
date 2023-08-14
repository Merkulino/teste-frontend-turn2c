import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DogResponse, DogsBreed } from '../models/Dog';

@Injectable({
  providedIn: 'root'
})
export class DogsAPIService {

  private URL: string = "https://api.thedogapi.com/v1";
  private auth_token: string = "live_zLWMrt8EIQZypISZ1yI0ng9KW3psxKyFRuKQpvq8O3MYYzwqdWoJ2WGG99HAunG5";

  public eventEmmiter: Subject<string | undefined> = new Subject();

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

  public getDogsBreeds(): Observable<DogsBreed[]> {
    const response = this.httpClient
      .get<DogsBreed[]>(
        'https://api.thedogapi.com/v1/breeds',
        this.getHttpHeaders())
    return response;
  }

  public getDogsByHisBreed(breedId: string, page: string = "0"): Observable<DogResponse[]> {
    return this.httpClient
      .get<DogResponse[]>(
        `${this.URL}/images/search?limit=8&breed_ids=${breedId}&page=${page}`,
        this.getHttpHeaders());
  }

  public getDogsFromUser(page: string = "0"): Observable<DogResponse[]> {
    return this.httpClient
      .get<DogResponse[]>(
        `${this.URL}/images/?limit=10&page=${page}`,
        this.getHttpHeaders());
  }

  public uploadUserDog(formData: FormData) {
    return this.httpClient.post(`${this.URL}/images/upload`, formData, this.getHttpHeaders());
  }
}
