import { Component, Input } from '@angular/core';
import { ArchiveService } from 'src/app/service/archive.service';
import { Book } from 'src/app/objects/Book';

@Component({
  selector: 'addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})

export class AddBookComponent {

  constructor(private data: ArchiveService) {}

  @Input() list = new Array<Book>();

  addBook() {
    let newCode = document.getElementById('newCode') as HTMLInputElement;
    let newTitle = document.getElementById('newTitle') as HTMLInputElement;
    let newAuthor = document.getElementById('newAuthor') as HTMLInputElement;

    

  }

}
