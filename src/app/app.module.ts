import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArchiveService } from './service/archive.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooklistComponent } from './components/booklist/booklist.component';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent
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
