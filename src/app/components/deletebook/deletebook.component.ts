import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Archive } from '../../objects/Archive';
import { Book } from '../../objects/Book';
import { ArchiveService } from '../../service/archive.service';

@Component({
  selector: 'deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})

export class DeletebookComponent {

  constructor(private data: ArchiveService) {}

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
    this.clearCache();
  }

  clearCache() {
    let key = document.getElementById('searchBarBox') as HTMLInputElement;
    if(key.value !== "") {
      key.value = "";
    }
  }

}
