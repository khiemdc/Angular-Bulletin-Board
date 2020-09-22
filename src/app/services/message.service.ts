import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../shared/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  public getMessages(): Observable<Message[]> {
    // return this.http.get<Message[]>('http://localhost:41516/api');
    return this.http.get<Message[]>('./assets/data/message.json');
    // return this.httpClient.get<PdfFile[]>('assets/pdf-files.json');
  }
}
