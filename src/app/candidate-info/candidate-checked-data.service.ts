import { Injectable } from '@angular/core';
import { BaseCandidatoDataService } from './base-candidate-data.service';
import { CandidateTrashDataService } from './candidate-trash-data.service';
import { CandidateAllDataService } from './candidate-all-data.service';

@Injectable({
  providedIn: 'root'
})
export class CandidateCheckedDataService extends BaseCandidatoDataService {

  constructor() {
    super()
  }

  moveToAll(uuid: string, candidateAllDataService: CandidateAllDataService): boolean {
    return this.moveTo(uuid, candidateAllDataService)
  }

  moveToTrash(uuid: string, candidateTrashDataService: CandidateTrashDataService): boolean {
    return this.moveTo(uuid, candidateTrashDataService)
  }
}