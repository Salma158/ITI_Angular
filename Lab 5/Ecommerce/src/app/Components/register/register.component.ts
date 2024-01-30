import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { noSpaceValidator } from '../../validators/usereNameValidator';
import { passwordStrengthValidator } from '../../validators/passwordValidator';
import { matchpassword } from '../../validators/confirmPasswordValidator';
import { validateUsernameExistence } from '../../validators/usereNameValidator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      userName: new FormControl('', [Validators.required, noSpaceValidator()], [validateUsernameExistence()]),
      email: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]{5,10}@(gmail|yahoo).com")]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), passwordStrengthValidator()]),
      confirmPassword: new FormControl('', [Validators.required])
    },
      {
        validators: matchpassword
      }
    )
  }



}
