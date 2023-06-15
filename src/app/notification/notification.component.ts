import { Component } from '@angular/core';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationComponent {

  success = "Il libro è stato inserito!";
  fail = "Impossibile inserire il libro!";

}
