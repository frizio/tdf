import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Bootcamp Enrollment Form';

  topics = ['Angular', 'React', 'Vue'];

  topicHasError = true;

  formSubmitted = false;

  // Instance of the model
  userModel = new User('Max', 'max@gmail.com', 1234567890, 'default', 'morning', true);
  // Bind the user model to the enrollment form using interpolation

  constructor(private _enrollmentService: EnrollmentService) { }

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    console.log("Submitting form data...");
    console.log(this.userModel);

    console.log("Disabling form");
    this.formSubmitted = true;
    
    console.log("...using a Service to submit this data to a server");
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log("success!", data),
        error => console.log("Error! ", error)
      )

  }

}
