import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/Movie';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];


  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(){
    this.service.getAllMovies().subscribe(data => {
      this.movies = data;
    })
  }  
}
