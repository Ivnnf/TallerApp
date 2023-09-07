

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {

  public alertButtons = ['OK'];
  usuario: string = "";
  contrasenia: string = "";
  confirmar: string = "";
  correo: string = "";
  niveles: any[] = [
    { id: 1, nivel: "Basica Incompleta" },
    { id: 2, nivel: "Basica Completa" },
    { id: 3, nivel: "Media Incompleta" },
    { id: 4, nivel: "Media Completa" },
    { id: 5, nivel: "Media Incompleta" },
    { id: 6, nivel: "Superior Completa" }
  ];
  data: any = {
    nombre: "",
    apellido: "",
    education: "",
    nacimiento: "",
    correo: ""
  };

  constructor(private route: ActivatedRoute, public alertController: AlertController,private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.usuario = params['usuario'];
    });
  }

  limpiar() {
    for (const key in this.data) {
      if (Object.prototype.hasOwnProperty.call(this.data, key)) {
        this.data[key] = "";
      }
    }
  }

  mostrar() {
    if (this.data.nombre !== "" && this.data.apellido !== "") {
      this.presentAlert("Usuario", "Se ha registrado correctamente " + this.data.nombre + " " + this.data.apellido);
    }
  }
  redirigirAHome() {
    this.router.navigate(['/login']);
  }
  

  async presentAlert(titulo: string, message: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
