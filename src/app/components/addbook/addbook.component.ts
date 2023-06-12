import { Component, Input } from '@angular/core';
import { ArchiveService } from 'src/app/service/archive.service';
import { Archive } from 'src/app/objects/Archive';

@Component({
  selector: 'addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
})

export class AddBookComponent {
  constructor(private data: ArchiveService) {}

  archive = new Archive();

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
          'Il nuovo libro con codice:' + newCode.value + ', titolo: ' +
            newTitle.value + ' e autore: ' +
            newAuthor.value + ' è stato inserito.');
      });
    }
  }
}
