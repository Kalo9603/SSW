import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() alertEvent = new EventEmitter();
  alertData = { message: '', type: '', visible: false };

  borrow() {
    let person = document.getElementById('person') as HTMLInputElement;
    this.archive.borrow(this.book.getCode(), person.value);
    this.archive.update(this.archive);
    this.alertData = {message: 'Il libro con codice ' + this.book.getCode() + ' è stato preso in prestito da ' + person.value + '.', type: 'success', visible: true};
    this.alertEvent.emit(this.alertData);
    this.flag = false;
  }
  
}
