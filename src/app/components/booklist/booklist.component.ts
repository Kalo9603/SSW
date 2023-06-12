import { Component, Input } from '@angular/core';
import { Archive } from 'src/app/objects/Archive';
import { Book } from 'src/app/objects/Book';

@Component({
  selector: 'booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})

export class BooklistComponent {

  @Input() list = new Array<Book>();

}
