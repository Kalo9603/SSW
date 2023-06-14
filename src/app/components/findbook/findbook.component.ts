import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/objects/Book';
import { Archive } from 'src/app/objects/Archive';
import { ArchiveService } from 'src/app/service/archive.service';
import { faMagnifyingGlass, faUser, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'findbook',
  templateUrl: './findbook.component.html',
  styleUrls: ['./findbook.component.css']
})

export class FindbookComponent implements OnInit {

  searchIcon = faMagnifyingGlass;
  userIcon = faUser;
  trashIcon = faTrash;

  archive = new Archive();
  list = this.archive.getList();

  resultLen = -1;
  bookTarget = new Book('', '', '');
  isFree = this.bookTarget.isFree();

  constructor(private data: ArchiveService) {}

  find() {
    let key = document.getElementById('searchBarBox') as HTMLInputElement;
    if(key.value !== "") {
      this.resultLen = this.archive.countResults(key.value);
      if(this.resultLen === 1) {

        let code = this.archive.find(key.value)[0].getCode();
        this.bookTarget = this.archive.findBook(code);

      }
    } else {
      this.resultLen = -1;
    }
  }

  delete() {

    this.archive.remove(this.bookTarget.getCode());
    this.data.set(JSON.stringify(this.archive)).subscribe(() => {
      alert(
        'Il nuovo libro con codice ' + this.bookTarget.getCode() + ' è stato eliminato!');
    });

  }

  ngOnInit() {
    try {
      this.data.get().subscribe((res) => {
        let list = JSON.parse(JSON.parse(res)).list;
        list.map((x: any) => {
          this.archive.add(x.code, x.title, x.author, x.borrowedBy);
        });
      });
    } catch (e: any) {
      console.error('Errore: ' + e.message);
    }
  }

}
