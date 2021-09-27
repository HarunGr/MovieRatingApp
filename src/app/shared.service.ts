import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://localhost:53535/api";


  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + 'movies');
  }

  searchMovies(term: string): Observable<any>{
    return this.http.get<any>(this.APIUrl + `movies/search/${term}`);
  }

  getTopMovies(page: number): Observable<any>{
    return this.http.get<any>(this.APIUrl + `movies/top/${page}`);
  }

  ratePost(vote: any): Observable<any>{
    return this.http.post<any>(this.APIUrl + `rating`, vote);
  }
}
