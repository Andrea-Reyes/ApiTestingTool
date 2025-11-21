import { Component, Output, EventEmitter } from '@angular/core';
import { Request } from '../../interfaces/request';
import { ApiService } from '../../services/api-service';
import { HeadersComponent } from '../headers-component/headers-component'
import { BodyComponent } from '../body-component/body-component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-component',
  standalone: true,
  imports: [CommonModule, FormsModule, HeadersComponent, BodyComponent],
  templateUrl: './request-component.html',
  styleUrl: './request-component.css',
})
export class RequestComponent {
  @Output() response = new EventEmitter<any>();

  url:string = '';
  method:string = 'GET';
  headers: { [key: string]: string } = {};
  body:any = '';

  constructor(private apiService: ApiService) {}

  async sendRequest() {
    const request: Request = {
      url: this.url,
      method: this.method as any,
      headers: this.headers,
      body: this.method !== 'GET' && this.method !== 'DELETE' ? this.contenidoBody(): undefined
    }

    const response = await this.apiService.sendRequest(request);
    this.response.emit(response);
  }

  contenidoBody() {
    try {
      return JSON.parse(this.body);
    } catch {
      return this.body;
    }
  }

  actualizarHeaders(headers: any) {
    this.headers = headers;
  }

  actualizarBody(body: string) {
    this.body = body;
  }
}
