import { Component, OnInit } from '@angular/core';
import { ArchiveService } from 'src/app/service/archive.service';
import { Archive } from 'src/app/objects/Archive';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
})

export class AddBookComponent implements OnInit {

  constructor(private data: ArchiveService) {}

  archive = new Archive();
  icon = faPlus;

  addBook() {

    let newCode = document.getElementById('newCode') as HTMLInputElement;
    let newTitle = document.getElementById('newTitle') as HTMLInputElement;
    let newAuthor = document.getElementById('newAuthor') as HTMLInputElement;

    if (!newCode.value || !newTitle.value || !newAuthor.value) {
      alert('Bisogna compilare tutti i campi! Riprova.');

    } else {

      this.archive.add(newCode.value, newTitle.value, newAuthor.value);

      this.data.set(JSON.stringify(this.archive)).subscribe(() => {
        alert(
          'Il nuovo libro con codice ' + newCode.value + ', titolo ' +
            newTitle.value + ' e autore ' +
            newAuthor.value + ' è stato inserito!');
      });
    }
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
