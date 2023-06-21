import { Component, Input, OnInit } from '@angular/core';
import { Archive } from 'src/app/objects/Archive';
import { Book } from 'src/app/objects/Book';
import { ArchiveService } from 'src/app/service/archive.service';

@Component({
  selector: 'booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})

export class BooklistComponent implements OnInit {

  @Input() archive = new Archive(this.data);
  list = new Array<Book>();
  len = this.list.length;

  constructor(private data: ArchiveService) {}

  ngOnInit() {
      setInterval(() => {
        this.list = this.archive.getList();
        this.len = this.list.length;
      }, 1000);
  }

}
