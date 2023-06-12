import { Component } from '@angular/core';
import { Archive } from 'src/app/objects/Archive';
import { ArchiveService } from 'src/app/service/archive.service';

@Component({
  selector: 'booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})

export class BooklistComponent {

  constructor(private data: ArchiveService) {}

  archive = new Archive();
  list = this.archive.getList();
  len = this.archive.size();

  ngOnInit() {
      try {
        this.data.get().subscribe((res) => {
          let list = JSON.parse(JSON.parse(res)).list;
          list.map((x: any) => {
            this.archive.add(x.code, x.title, x.author, x.borrowedBy);
          });
        });
      } catch (e: any) {
        console.error('Errore: ' + e.message);
      }
    }

}
