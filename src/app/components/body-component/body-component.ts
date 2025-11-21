import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './body-component.html',
  styleUrl: './body-component.css',
})
export class BodyComponent {
  @Output() bodyChange = new EventEmitter<string>();

  body = '';
  numerosFilas:string = '1';

  actualizarBody() {
    this.bodyChange.emit(this.body);
  }

  constructor() {
    this.actualizarNumeros();
  }

  actualizarNumeros() {
    const lineas = this.body.split('\n').length;
    let numeros = '';

    for (let i = 1; i < lineas + 1; i++) {
      numeros += i + '\n';
    }

    this.numerosFilas = numeros.trimStart();
  }
}