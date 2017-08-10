import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from './custom-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  isDisabled = true;

  formDetails = {
    pName: '',
    pEmail: '',
    pStatus: ''
  };

  ngOnInit() {
    this.projectForm = new FormGroup({
      // 'projectName': new FormControl(null, [Validators.required, CustomValidator.forbiddenNames.bind(this)]),
      'projectName': new FormControl(null, [Validators.required, CustomValidator.forbiddenNames.bind(this)],
        CustomValidator.asynForbiddenNames),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('critical')
    });
  }

  onSubmit() {
    console.log(this.projectForm);
    this.formDetails.pName = this.projectForm.get('projectName').value;
    this.formDetails.pEmail = this.projectForm.get('email').value;
    this.formDetails.pStatus = this.projectForm.get('status').value;
   this.projectForm.reset();
  }


}
