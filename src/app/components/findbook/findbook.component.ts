import { Component, Input } from '@angular/core';
import { Book } from 'src/app/objects/Book';
import { Archive } from 'src/app/objects/Archive';
import { ArchiveService } from 'src/app/service/archive.service';

import { faMagnifyingGlass, faUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faUser as lightUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'findbook',
  templateUrl: './findbook.component.html',
  styleUrls: ['./findbook.component.css']
})

export class FindbookComponent {

  // Icone
  searchIcon = faMagnifyingGlass;
  userIcon = faUser;
  lightUserIcon = lightUser;
  trashIcon = faTrash;

  @Input() archive = new Archive(this.data);

  resultLen = -1;
  bookTarget = new Book('', '', '');
  isFree = this.bookTarget.isFree();
  showBorrowFormFlag = false;

  constructor(private data: ArchiveService) {}

  find() {
    let key = document.getElementById('searchBarBox') as HTMLInputElement;
    if(key.value !== "") {
      this.resultLen = this.archive.countResults(key.value);
      if(this.resultLen === 1) {

        let code = this.archive.find(key.value)[0].getCode();
        this.bookTarget = this.archive.findBook(code);
        this.isFree = this.bookTarget.isFree();

      }
    } else {
      this.resultLen = -1;
    }
  }

  delete() {

    this.archive.remove(this.bookTarget.getCode());
    this.data.set(JSON.stringify(this.archive)).subscribe(() => {
      alert(
        'Il libro con codice ' + this.bookTarget.getCode() + ' è stato eliminato!');
    });

  }

  showBorrowForm() {
    this.showBorrowFormFlag = !this.showBorrowFormFlag;
  }

  borrow() {
    let person = document.getElementById('person') as HTMLInputElement;
    this.archive.borrow(this.bookTarget.getCode(), person.value);
    this.data.set(JSON.stringify(this.archive)).subscribe(() => {
      alert(
        'Il libro con codice ' + this.bookTarget.getCode() + ' è stato preso in prestito!');
    });
  }

  free() {
    this.archive.free(this.bookTarget.getCode());
    this.data.set(JSON.stringify(this.archive)).subscribe(() => {
      alert(
        'Il libro con codice ' + this.bookTarget.getCode() + ' è stato restituito!');
    });
    this.showBorrowFormFlag = false;
  }

}
