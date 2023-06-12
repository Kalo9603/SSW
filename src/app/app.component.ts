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
  
  constructor(private data: ArchiveService) {}

  title = 'Biblioteca';
  list = new Array<Book>();
  archive = new Archive();

  ngOnInit() {
      try {
        this.data.get().subscribe((res) => {
          let list = JSON.parse(res);
          list.map((x: any) => {
            this.list.push(new Book(x.code, x.title, x.author, x.borrowedBy));
            this.archive.add(x.code, x.title, x.author, x.borrowedBy);
            console.log(this.archive);
            
          });
        });
      } catch (e: any) {
        console.error('Errore: ' + e.message);
      }
    }

}
