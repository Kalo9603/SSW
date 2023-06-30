import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Archive } from '../../objects/Archive';
import { Book } from '../../objects/Book';
import { ArchiveService } from '../../service/archive.service';

@Component({
  selector: 'free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.css']
})

export class FreeComponent {

  constructor(private data: ArchiveService) {}

  @Input() book = new Book('', '', '');
  @Input() archive = new Archive(this.data);
  @Input() flag = new Boolean();
  @Output() alertEvent = new EventEmitter();
  @Output() flagEvent = new EventEmitter<Boolean>();

  alertData = { message: '', type: '', visible: false };

  free() {
    this.archive.free(this.book.getCode());
    this.archive.update(this.archive);
    this.alertData = { message: 'Il libro con codice ' + this.book.getCode() + ' è stato restituito.', type: 'success', visible: true };
    this.flag = false;
    this.alertEvent.emit(this.alertData);
    this.flagEvent.emit(this.flag);
  }

}
