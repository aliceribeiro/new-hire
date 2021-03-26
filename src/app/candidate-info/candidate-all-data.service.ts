import { Injectable } from '@angular/core';
import { Candidate } from './candidate';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseCandidatoDataService } from './base-candidate-data.service';
import { CandidateTrashDataService } from './candidate-trash-data.service';
import { CandidateCheckedDataService } from './candidate-checked-data.service';

@Injectable({
  providedIn: 'root'
})
export class CandidateAllDataService extends BaseCandidatoDataService {
  private calledApi = false;

  constructor(
    private http: HttpClient
  ) {
    super()
  }

  hasCalledAPI () {
    return this.calledApi;
  }

  getAll() {
    if(this.calledApi) {
      return this.candidatosSource;
    } else {
      this.http
      .get("https://randomuser.me/api/?nat=br&seed=5165165165&results=10")
      .pipe(
        map((apiResult: { results: Candidate[] }) => apiResult.results)
        ).subscribe((candidatos) => {
          this.calledApi = true
          this.candidatos = candidatos;
          this.candidatosSource.next(this.candidatos);
        });

      return this.candidatosSource;
    }
  }


  moveToTrash(uuid: string, candidateTrashDataService: CandidateTrashDataService): boolean {
    return this.moveTo(uuid, candidateTrashDataService)
  }

  moveToChecked(uuid: string, candidateCheckedDataService: CandidateCheckedDataService): boolean {
    return this.moveTo(uuid, candidateCheckedDataService)
  }
}