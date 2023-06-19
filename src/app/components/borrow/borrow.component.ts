import { Component, Input } from '@angular/core';
import { ArchiveService } from 'src/app/service/archive.service';
import { Book } from 'src/app/objects/Book';
import { Archive } from 'src/app/objects/Archive';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})

export class BorrowComponent {

  constructor(private data: ArchiveService) {}

  icon = faUser;

  @Input() book = new Book('', '', '');
  @Input() archive = new Archive(this.data);
  @Input() flag = new Boolean();

  borrow() {
    let person = document.getElementById('person') as HTMLInputElement;
    this.archive.borrow(this.book.getCode(), person.value);
    this.archive.update(this.archive, 'Il libro con codice ' + this.book.getCode() + ' è stato preso in prestito.');
  }

}
