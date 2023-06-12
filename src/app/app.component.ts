import { Component } from '@angular/core';
import { Book } from './objects/Book';
import { Archive } from './objects/Archive';
import { ArchiveService } from './service/archive.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  title = 'Biblioteca';
  
}
