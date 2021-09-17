import { Component } from '@angular/core';

interface UserLogin {
  status: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Propiedades del usuario
  dataUser: UserLogin = {
    status: false
  }

  // Propiedad para el estado del sidenav
  opened: boolean = true;
  
  title = 'form-test';

  chanceState( state: boolean) {
    this.opened = state;
  }
}
