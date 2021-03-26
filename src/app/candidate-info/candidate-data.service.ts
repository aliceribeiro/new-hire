import { Injectable } from '@angular/core';
import { CandidateTrashDataService } from './candidate-trash-data.service';
import { CandidateCheckedDataService } from './candidate-checked-data.service';
import { CandidateAllDataService } from './candidate-all-data.service';

@Injectable({
  providedIn: 'root'
})
export class CandidateDataService {

  constructor(
    private candidateTrashDataService: CandidateTrashDataService,
    private candidateCheckedDataService: CandidateCheckedDataService,
    private candidateAllDataService: CandidateAllDataService
  ) {}

  getAllFromAll() {
    return this.candidateAllDataService.getAll()
  }

  getByUUIDFromAll(uuid: string) {
    return this.candidateAllDataService.getByUUID(uuid)
  }

  getByUUIDFromTrash(uuid: string) {
    return this.candidateTrashDataService.getByUUID(uuid)
  }

  getByUUIDFromChecked(uuid: string) {
    return this.candidateTrashDataService.getByUUID(uuid)
  }

  getAllFromTrash() {
    return this.candidateTrashDataService.getAll()
  }

  getAllFromChecked() {
    return this.candidateCheckedDataService.getAll()
  }

  moveFromAllToTrash(uuid: string): boolean {
    return this.candidateAllDataService.moveToTrash(uuid, this.candidateTrashDataService)
  }
  moveFromAllToChecked(uuid: string): boolean {
    return this.candidateAllDataService.moveToChecked(uuid, this.candidateCheckedDataService)
  }

  moveFromTrashToAll(uuid: string): boolean {
    return this.candidateTrashDataService.moveToAll(uuid, this.candidateAllDataService)
  }
  moveFromTrashToChecked(uuid: string): boolean {
    return this.candidateTrashDataService.moveToChecked(uuid, this.candidateCheckedDataService)
  }

  moveFromCheckedToAll(uuid: string): boolean {
    return this.candidateCheckedDataService.moveToAll(uuid, this.candidateAllDataService)
  }
  moveFromCheckedToTrash(uuid: string): boolean {
    return this.candidateCheckedDataService.moveToTrash(uuid, this.candidateTrashDataService)
  }
}