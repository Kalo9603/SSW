import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArchiveService } from './service/archive.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooklistComponent } from './components/booklist/booklist.component';
import { AddBookComponent } from './components/addbook/addbook.component';
import { FindbookComponent } from './components/findbook/findbook.component';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    AddBookComponent,
    FindbookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    ArchiveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
