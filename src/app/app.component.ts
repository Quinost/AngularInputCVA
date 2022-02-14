import { Component } from '@angular/core';
import { ErrorMessage, QuiErrorMessageService } from './qui-error-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title:any =  'AngInputCVA';

  constructor(quiErr: QuiErrorMessageService){
    quiErr.addMessage(new ErrorMessage("required", "Default required", ""));
  }


}
