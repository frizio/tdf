import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Bootcamp Enrollment Form';

  topics = ['Angular', 'React', 'Vue'];

  topicHasError = true;

  // Instance of the model
  userModel = new User('Max', 'max@gmail.com', 390918983067, 'default', 'morning', true);

  // Bind the user model to the enrollment form using interpolation

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

}
