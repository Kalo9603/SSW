import { Component, OnInit } from '@angular/core';
import { Archive } from './objects/Archive';
import { ArchiveService } from './service/archive.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  title = 'Biblioteca';

  constructor(private data: ArchiveService) {}

  archive = new Archive(this.data);

}
