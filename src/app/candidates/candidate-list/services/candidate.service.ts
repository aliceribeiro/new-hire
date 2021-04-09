import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map, mapTo } from 'rxjs/operators';

import { Candidate } from '../models/candidate';
import { CandidatesAPIResult } from '../models/CandidatesAPIResult';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  apiUrl = 'https://randomuser.me/api/?nat=br&seed=5165165165&results=10';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private httpClient: HttpClient) { }

  // Obtendo todos os candidatos
  getCandidates(): Observable<Candidate[]> {
    return this.httpClient.get<CandidatesAPIResult>(this.apiUrl)
      .pipe(
        retry(2),
        map((result) => result.results),
        catchError(this.handleError)
      )
  }

  // Obtendo um candidato pelo id
  getCandidateById(uuid: string): Observable<Candidate> {
    return this.httpClient.get<CandidatesAPIResult>(this.apiUrl + '/' + uuid)
      .pipe(
        retry(2),
        map((result) => result.results.find((candidate) => candidate.login.uuid)),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu do lado do cliente
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu do lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
