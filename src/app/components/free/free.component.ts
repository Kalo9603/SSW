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

  free() {
    this.archive.free(this.book.getCode());
    this.data.set(JSON.stringify(this.archive)).subscribe(() => {
      alert(
        'Il libro con codice ' + this.book.getCode() + ' è stato restituito.');
    });
    this.borrowFlag = false;
  }

}
