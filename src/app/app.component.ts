import { Component } from '@angular/core';
import { Archive } from './objects/Archive';
import { ArchiveService } from './service/archive.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private data: ArchiveService) {}

  archive = new Archive();
  list = this.archive.getList();

  getData() {
    try {
      this.data.get().subscribe((res) => {
        let list = JSON.parse(res);
        list.map((x: any) => {
          this.archive.add(x.code, x.title, x.author, x.borrowedBy);
        });
      });
    } catch (e: any) {
      console.error('Errore: ' + e.message);
    }
  }

  ngOnInit() {
    this.getData();
  }
}
