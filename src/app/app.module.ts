import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArchiveService } from './service/archive.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooklistComponent } from './components/booklist/booklist.component';
import { AddBookComponent } from './components/addbook/addbook.component';
import { FindbookComponent } from './components/findbook/findbook.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotificationComponent } from './components/notification/notification.component';
import { DeletebookComponent } from './components/deletebook/deletebook.component';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    AddBookComponent,
    FindbookComponent,
    NotificationComponent,
    DeletebookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [
    ArchiveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
