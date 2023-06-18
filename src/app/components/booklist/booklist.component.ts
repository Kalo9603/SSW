import { Component, Input } from '@angular/core';
import { Archive } from 'src/app/objects/Archive';
import { ArchiveService } from 'src/app/service/archive.service';

@Component({
  selector: 'booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})

export class BooklistComponent {

  @Input() archive = new Archive(this.data);
  list = this.archive.getList();

  constructor(private data: ArchiveService) {}

}
