import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  login: any = {
    Usuario: "",
    Password: ""
  };

  field: string = "";

  constructor(private router: Router, public toastController: ToastController) {}

  ingresar() {
    if (this.validateModel(this.login) && this.validatePassword(this.login.Password)) {
      // Realiza el inicio de sesión si la contraseña es válida
      // ... (tu lógica para el inicio de sesión)

      // Redirige al usuario al Home y pasa el nombre de usuario como parámetro
      this.router.navigate(['/home', { usuario: this.login.Usuario }]);
    } else {
      this.presentToast("Ingresa un " + this.field + " válido, son mínimo 3 caracteres y máximo 8");
    }
  }

  validateModel(model: any) {
    for (const key in model) {
      if (model.hasOwnProperty(key) && model[key] === "") {
        this.field = key;
        return false;
      }
    }
    return true;
  }

  validatePassword(password: string): boolean {
    return password.length >= 3 && password.length <= 8;
  }

  async presentToast(message: string, duration?: number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration ? duration : 2000
    });
    toast.present();
  }
}

