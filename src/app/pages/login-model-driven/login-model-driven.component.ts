import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-model-driven',
  templateUrl: './login-model-driven.component.html',
  styleUrl: './login-model-driven.component.scss',
})
export class LoginModelDrivenComponent {
  forbiddenPasswords = ['123456', 'abcdef', 'azerty'];
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        this.forbiddenPassword.bind(this),
      ]),
    });
  }
  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log('yes');
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }
  forbiddenPassword(control: AbstractControl): { [key: string]: any } | null {
    const forbidden = this.forbiddenPasswords.includes(control.value);
    return forbidden ? { 'forbiddenPassword': { value: control.value } } : null;
  }
  

  /*forbiddenPassword(control: FormControl): { forbidden: boolean } | null {
    if (!this.forbiddenPasswords.includes(control.value)) return null;
    return { forbidden: true };
  }*/
}
