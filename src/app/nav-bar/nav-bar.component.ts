import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterPageComponent } from '../register-page/register-page.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loginDialogRef: any;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  login() {
    this.loginDialogRef = this.dialog.open(RegisterPageComponent);
  }
}
