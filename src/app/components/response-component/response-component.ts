import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Response } from '../../interfaces/response';

@Component({
  selector: 'app-response-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './response-component.html',
  styleUrl: './response-component.css',
})
export class ResponseComponent {
  @Input() response?: Response;

  formato(objeto:any) {
    return JSON.stringify(objeto, null, 2);
  }
}
