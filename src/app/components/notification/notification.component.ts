import { Component, Input } from '@angular/core';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  @Input() alertData = {
    message : '',
    type : '',
    visible: false
  };

  close() {
    if(this.alertData.visible) {
      setTimeout(() => {
        this.alertData.visible = false;
      }, 1000);
    }
  }

}
