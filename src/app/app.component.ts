import { Component } from '@angular/core';
import { DefaultErrorForValidator, ErrorMessage, QuiErrorMessageService } from './controls/base/services/qui-error-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:any =  'AngInputCVA';

  constructor(quiErr: QuiErrorMessageService){
    quiErr.addMessage(new ErrorMessage(DefaultErrorForValidator.Required, "Default required message"));
    quiErr.addMessage(new ErrorMessage(DefaultErrorForValidator.Required, "Default required message"));
    quiErr.addMessage(new ErrorMessage("usernameExists", "Username exists"));
  }
}
