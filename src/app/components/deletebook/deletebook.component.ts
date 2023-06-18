import { Component, Input } from '@angular/core';
import { Book } from 'src/app/objects/Book';
import { Archive } from 'src/app/objects/Archive';
import { ArchiveService } from 'src/app/service/archive.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})

export class DeletebookComponent {

  constructor(private data: ArchiveService) {}

  trashIcon = faTrash;
  @Input() book = new Book('', '', '');
  @Input() archive = new Archive(this.data);

  delete() {

    this.archive.remove(this.book.getCode());
    this.data.set(JSON.stringify(this.archive)).subscribe(() => {
      alert(
        'Il libro con codice ' + this.book.getCode() + ' è stato eliminato!');
    });

  }

}
