import { Component, OnInit } from '@angular/core';

import { Candidate } from './models/candidate';
import { CandidateService } from './services/candidate.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class candidatesListComponent implements OnInit {

  // candidate = { } as Candidate;
  candidates: Candidate[] = [];

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.getCandidates();
  }

  getCandidates() {
    this.candidateService.getCandidates().subscribe((candidates: Candidate[]) => {
      this.candidates = candidates;
      console.log('sasasa1=', this.candidates);
    });
  }

}
