import { Component, OnInit } from '@angular/core';

import { Candidate } from '../candidate-info/candidate';
import { CandidateDataService } from '../candidate-info/candidate-data.service';
@Component({
  selector: 'app-checked',
  templateUrl: './checked.component.html',
  styleUrls: ['./checked.component.css']
})
export class CheckedComponent implements OnInit {

  constructor(
    private candidateDataService: CandidateDataService
  ) {
  }

  public candidates: Candidate[] = [];

  ngOnInit() { 
    this.candidateDataService.getAllFromChecked().subscribe((result) => {
      this.candidates = result
    })
  }

  moverParaLixeira(uuid: string) {
    this.candidateDataService.moveFromAllToTrash(uuid)
  }
  
}