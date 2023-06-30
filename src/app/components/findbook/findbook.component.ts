import { Component, Input } from '@angular/core';
import { Archive } from '../../objects/Archive';
import { Book } from '../../objects/Book';
import { ArchiveService } from '../../service/archive.service';

@Component({
  selector: 'findbook',
  templateUrl: './findbook.component.html',
  styleUrls: ['./findbook.component.css'],
})

export class FindbookComponent {

  @Input() archive = new Archive(this.data);

  resultLen = -1;
  bookTarget = new Book('', '', '');
  isFree = this.bookTarget.isFree();
  showBorrowFormFlag = false;
  alertData = { message: '', type: '', visible: false };

  constructor(private data: ArchiveService) {}

  find() {
    setInterval(() => {
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
    }, 1000);
    this.showBorrowFormFlag = false;
  }

  showBorrowForm() {
    this.showBorrowFormFlag = !this.showBorrowFormFlag;
  }

  getAlert(event: any) {
    this.alertData = event;
  }

  clearCache() {
    let key = document.getElementById('searchBarBox') as HTMLInputElement;
    if(key.value !== "") {
      key.value = "";
      this.resultLen = -1;
    }
    this.alertData.visible = false;
  }

}
