import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Archive } from '../../objects/Archive';
import { Book } from '../../objects/Book';
import { ArchiveService } from '../../service/archive.service';

@Component({
  selector: 'borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})

export class BorrowComponent {

  constructor(private data: ArchiveService) {}

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
