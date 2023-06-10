import { Component } from '@angular/core';
import { Book } from './objects/Book';
import { ArchiveService } from './service/archive.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  constructor(private data: ArchiveService) {}

  list = new Array<Book>();

  ngOnInit() {
      try {
        this.data.get().subscribe((res) => {
          let list = JSON.parse(res);
          list.map((x: any) => {
            this.list.push(new Book(x.code, x.title, x.author, x.borrowedBy));
          });
        });
      } catch (e: any) {
        console.error('Errore: ' + e.message);
      }
    }

}
