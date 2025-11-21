import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-headers-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './headers-component.html',
  styleUrl: './headers-component.css',
})
export class HeadersComponent {
  @Output() headersChange = new EventEmitter<any>();
  headers: { key: string, value: string }[] = [{ key: '', value: '' }];

  agregarHeader() {
    this.headers.push({ key:'', value:''});
    this.formatoHeaders();
  }

  eliminarHeader(i: number) {
    this.headers.splice(i, 1);
    this.formatoHeaders();
  }

  formatoHeaders() {
    const formato: any = {};
    this.headers.forEach(h => {
      if(h.key.trim()) {
        formato[h.key] = h.value;
      }
    });
    this.headersChange.emit(formato);
  }
}