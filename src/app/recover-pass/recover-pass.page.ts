import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.page.html',
  styleUrls: ['./recover-pass.page.scss'],
})
export class RecoverPassPage {
  public alertButtons = ['OK'];

  email: string = '';
  constructor() { }

  enviarCorreo() {

  }

}
