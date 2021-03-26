import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate-info/candidate';
import { CandidateDataService } from '../candidate-info/candidate-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private candidateDataService: CandidateDataService
  ) {}

  public candidates: Candidate[] = []

  ngOnInit() {
    this.candidateDataService.getAllFromAll().subscribe((result) => {
      this.candidates = result
    })
  }

  moverParaLixeira(uuid: string) {
    this.candidateDataService.moveFromAllToTrash(uuid)
  }

  moverParaAtendidos(uuid: string) {
    this.candidateDataService.moveFromAllToChecked(uuid)
  }

  moveFromTrashToAll(uuid: string) {
    this.candidateDataService.moveFromTrashToAll(uuid)
  }

}
