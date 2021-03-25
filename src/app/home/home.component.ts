import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public database$: Observable<any>;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.database$ = this.http.get("https://randomuser.me/api/?nat=br&seed=5165165165&results=10");
  }

}
