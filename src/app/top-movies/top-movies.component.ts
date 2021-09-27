import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Movie } from '../models/Movie';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css']
})
export class TopMoviesComponent implements OnInit {
  movies: Movie[] = [];
  page: number = 0;
  searchControl: FormControl;


  constructor(private service: SharedService, private formBuilder: FormBuilder) {
    this.searchControl = this.formBuilder.control({value: null, disabled: false});
   }

  

  getTopMovies(){
    this.service.getTopMovies(this.page).subscribe(data=>{
      this.movies = data;
      this.page++;
    })
  }

  ngOnInit(): void {
    this.getTopMovies();
    this.onChanges();
  }


  onChanges(){
    this.searchControl.valueChanges.subscribe(value => {
      if(value.length() >= 2){
        this.service.searchMovies(value);
      }
    });
  }
}
