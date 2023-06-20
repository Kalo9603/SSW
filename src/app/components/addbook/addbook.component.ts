import { Component, Input } from '@angular/core';
import { Archive } from 'src/app/objects/Archive';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ArchiveService } from 'src/app/service/archive.service';

@Component({
  selector: 'addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
})

export class AddBookComponent {

  @Input() archive = new Archive(this.data);
  alertData = { message: '', type: '', visible: false };

  icon = faPlus;

  constructor(private data: ArchiveService) {}

  addBook() {

    let newCode = document.getElementById('newCode') as HTMLInputElement;
    let newTitle = document.getElementById('newTitle') as HTMLInputElement;
    let newAuthor = document.getElementById('newAuthor') as HTMLInputElement;

    if (!newCode.value || !newTitle.value || !newAuthor.value) {
      this.alertData = { message: 'Bisogna compilare tutti i campi. Riprova.', type: 'fail', visible: true };
    } else if(this.archive.findBook(newCode.value)) {
      this.alertData = { message: 'Codice già in uso. Digitarne un altro.', type: 'fail', visible: true };
    } else {
      this.archive.add(newCode.value, newTitle.value, newAuthor.value);
      this.archive.update(this.archive);
      this.alertData = { message: 'Il nuovo libro con codice ' + newCode.value + ' è stato inserito.', type: 'success', visible: true };
    }
  }

}