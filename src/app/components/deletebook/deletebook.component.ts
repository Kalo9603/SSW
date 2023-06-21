import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() alertEvent = new EventEmitter();
  alertData = { message: '', type: '', visible: false };

  delete() {

    if(!this.archive.findBook(this.book.getCode()).isFree()) {
      this.alertData = { message: "Impossibile rimuovere il libro poiché in prestito." , type: 'fail', visible: true };
    } else {
      this.archive.remove(this.book.getCode());
      this.archive.update(this.archive);
      this.alertData = { message: 'Il libro con codice ' + this.book.getCode() + ' è stato rimosso.', type: 'success', visible: true };
    }
    this.alertEvent.emit(this.alertData);
  }

}
