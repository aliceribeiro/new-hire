import { Component, OnInit } from '@angular/core';

import { Candidate } from '../candidate-info/candidate';
import { CandidateDataService } from '../candidate-info/candidate-data.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  constructor(
    private candidateDataService: CandidateDataService
  ) {
  }

  public candidates: Candidate[] = [];

  ngOnInit() {    
    this.candidateDataService.getAllFromTrash().subscribe((result) => {
      this.candidates = result
    })
  }

  moverParaLixeira(uuid: string) {
    this.candidateDataService.moveFromAllToTrash(uuid)
  }

}