import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Request } from '../interfaces/request';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  async sendRequest(data: Request): Promise<Response> {
    try {
      const headers = new HttpHeaders(data.headers || {});
      const startime = performance.now();
      const response = await firstValueFrom(
        this.http.request(data.method, data.url, {
          headers,
          body: data.body,
          observe: 'response',
        })
      );

      const endtime = performance.now();
      return {
        status: response.status,
        time: endtime - startime,
        body: response.body,
      }
    } catch (error:any) {
      const endtime = performance.now();

      return {
        status: error.status || 0,
        time: endtime,
        body: error.body || null,
        error: error.message || 'Fallado',
      }
    }
  }
}