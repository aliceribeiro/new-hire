import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Candidate } from './candidate';
import { CandidateDataService } from './candidate-data.service';

@Component({
  selector: 'app-candidate-info',
  templateUrl: './candidate-info.component.html',
  styleUrls: ['./candidate-info.component.css']
})
export class CandidateInfoComponent implements OnInit {

  constructor(
    private candidatoDataService: CandidateDataService,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  candidate: Candidate;

  headerText: string;
  secondaryText: string;

  activeButton: string;

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        const uuid = params['uuid'];
        if (uuid) {
          this.candidatoDataService
            .getByUUID(uuid)
            .subscribe(candidate => {
              if (candidate) {
                this.onProfileButton(candidate);
                this.candidate = candidate
              }
            });
          }
      });
  }

  private setTexts(headerText: string, secondaryText: string): void {
    this.headerText = headerText;
    this.secondaryText = secondaryText;
  }

  setButtonActive(buttonName: string) {
    this.activeButton = buttonName;
  }

  onProfileButton(candidate: Candidate) {
    this.setTexts(
      'Hi, my name is',
      `${candidate.name.first} ${candidate.name.last}`
    )
    this.setButtonActive('profile')
  }

  onEmailButton(candidate: Candidate) {
    this.setTexts('My email address is', candidate.email)
    this.setButtonActive('email')
  }

  onCalendarButton(candidate: Candidate) {
    this.setTexts('My birthday is', candidate.dob.date)
  }

  onLocationButton(candidate: Candidate) {
    this.setTexts('My address is', 
    `${candidate.location.street.number} ${candidate.location.street.name}`
    )
  }

  onCellButton(candidate: Candidate) {
    this.setTexts('My phone number is', candidate.cell)
  }

  onKeyButton(candidate: Candidate) {
    this.setTexts('My password is', candidate.login.password)
  }

  isActive (buttonName){
    return this.activeButton === buttonName;
  }

  backClicked() {
    this._location.back();
  }
}
