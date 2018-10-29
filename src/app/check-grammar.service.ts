import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckGrammarService {

  private checkGrammarPath = 'check-grammar';

  public constructor(private httpClient: HttpClient) { }

  public checkGrammar(paragraph: { paragraph: string}): Observable<Data> {
    return this.httpClient.post<Data>(`${environment.apiUrl}${this.checkGrammarPath}`, paragraph);
  }
}
