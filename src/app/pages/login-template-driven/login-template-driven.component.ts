import { Component } from '@angular/core';

@Component({
  selector: 'app-login-template-driven',
  templateUrl: './login-template-driven.component.html',
  styleUrl: './login-template-driven.component.scss'
})
export class LoginTemplateDrivenComponent {

  onSubmit(form: any): void {
    console.log('You submitted value:', form);
  }
}
