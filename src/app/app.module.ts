import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArchiveService } from './service/archive.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BooklistComponent } from './components/booklist/booklist.component';
import { AddBookComponent } from './components/addbook/addbook.component';
import { FindbookComponent } from './components/findbook/findbook.component';
import { DeletebookComponent } from './components/deletebook/deletebook.component';
import { BorrowComponent } from './components/borrow/borrow.component';
import { FreeComponent } from './components/free/free.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    AddBookComponent,
    FindbookComponent,
    DeletebookComponent,
    BorrowComponent,
    FreeComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ArchiveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
