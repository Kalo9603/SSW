import { Component, Input } from '@angular/core';
import { Book } from 'src/app/objects/Book';
import { Archive } from 'src/app/objects/Archive';
import { ArchiveService } from 'src/app/service/archive.service';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.css']
})

export class FreeComponent {

  constructor(private data: ArchiveService) {}

  icon = faUser;

  @Input() book = new Book('', '', '');
  @Input() archive = new Archive(this.data);
  @Input() flag = new Boolean();
  @Input() borrowFlag = new Boolean();
  alertData = { message: '', type: '', visible: false };

  free() {
    this.archive.free(this.book.getCode());
    this.archive.update(this.archive);
    this.alertData = { message: 'Il libro con codice ' + this.book.getCode() + ' è stato restituito.', type: 'success', visible: true };
    this.flag = false;
  }

}
