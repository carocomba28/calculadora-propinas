import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  monto: number = 0;
  porcentajePropina: number = 0;
  propina: number = 0;
  totalPagar: number = 0;

  calcularPropinaYTotal(): void {
    if (this.monto && this.porcentajePropina) {
      this.propina = (this.monto * this.porcentajePropina) / 100;
      this.totalPagar = this.monto + this.propina;
    }
  }

  limpiarValores(): void {
    this.monto = 0;
    this.porcentajePropina = 0;
    this.propina = 0;
    this.totalPagar = 0;
  }
}