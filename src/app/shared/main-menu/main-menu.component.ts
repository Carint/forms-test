import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface UserLogin {
  company: string;
  status: boolean;
}

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  // Propiedades del usuario
  dataUser: UserLogin = {
    company: 'Medica integral',
    status: false
  }

  // Propiedad del estado del sidenav
  opened: boolean = false;

  // Emisor o observable de onOpened
  @Output() onOpened: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  chanceState(): void {
    this.opened = !this.opened;

    // Emite el nuevo estado de la variable this.opened
    this.onOpened.emit(this.opened);
  }

}
