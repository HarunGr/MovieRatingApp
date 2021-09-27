import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Movie } from './models/Movie';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieApp';
  

  
}
