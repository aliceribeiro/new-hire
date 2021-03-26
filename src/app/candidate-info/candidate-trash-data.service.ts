import { Injectable } from '@angular/core';
import { BaseCandidatoDataService } from './base-candidate-data.service';
import { CandidateAllDataService } from './candidate-all-data.service';
import { CandidateCheckedDataService } from './candidate-checked-data.service';

@Injectable({
  providedIn: 'root'
})
export class CandidateTrashDataService extends BaseCandidatoDataService {

  constructor() {
    super()
  }

  moveToAll(uuid: string, candidateAllDataService: CandidateAllDataService): boolean {
    return this.moveTo(uuid, candidateAllDataService)
  }

  moveToChecked(uuid: string, candidateCheckedDataService: CandidateCheckedDataService): boolean {
    return this.moveTo(uuid, candidateCheckedDataService)
  }
}