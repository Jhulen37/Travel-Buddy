import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  isLoginMode = true;
  errors: string | any;
  public registerForm: FormGroup | any;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    const email = this.registerForm.get('email')!.value;
    const password = this.registerForm!.get('password')!.value;
    console.log(email, password);
    if (this.isLoginMode) {
      this.authenticationService.login(email, password).subscribe((res) => {
        this.dialog.closeAll();
        console.log(res);
      });
    } else {
      this.authenticationService.signup(email, password).subscribe(
        (res: any) => {
          console.log(res);
        },
        (error: any) => {
          let newError = error.error.error.message;
          console.log(newError);
          if (newError === 'EMAIL_EXISTS') {
            this.errors = 'This email already exists!';
          }
        }
      );
    }
  }
}
